; *** This file starts with a copy of the file multilex.scm ***
; Copyright (C) 1997 Danny Dube', Universite' de Montre'al.
; All rights reserved.
; SILex 1.0.

;
; Gestion des Input Systems
; Fonctions a utiliser par l'usager:
;   lexer-make-IS, lexer-get-func-getc, lexer-get-func-ungetc,
;   lexer-get-func-line, lexer-get-func-column et lexer-get-func-offset
;

; Taille initiale par defaut du buffer d'entree
(define lexer-init-buffer-len 1024)

; Numero du caractere newline
(define lexer-integer-newline (char->integer #\newline))

; Constructeur d'IS brut
(define lexer-raw-IS-maker
  (lambda (buffer read-ptr input-f counters)
    (let ((input-f          input-f)                ; Entree reelle
	  (buffer           buffer)                 ; Buffer
	  (buflen           (string-length buffer))
	  (read-ptr         read-ptr)
	  (start-ptr        1)                      ; Marque de debut de lexeme
	  (start-line       1)
	  (start-column     1)
	  (start-offset     0)
	  (end-ptr          1)                      ; Marque de fin de lexeme
	  (point-ptr        1)                      ; Le point
	  (user-ptr         1)                      ; Marque de l'usager
	  (user-line        1)
	  (user-column      1)
	  (user-offset      0)
	  (user-up-to-date? #t))                    ; Concerne la colonne seul.
      (letrec
	  ((start-go-to-end-none         ; Fonctions de depl. des marques
	    (lambda ()
	      (set! start-ptr end-ptr)))
	   (start-go-to-end-line
	    (lambda ()
	      (let loop ((ptr start-ptr) (line start-line))
		(if (= ptr end-ptr)
		    (begin
		      (set! start-ptr ptr)
		      (set! start-line line))
		    (if (char=? (string-ref buffer ptr) #\newline)
			(loop (+ ptr 1) (+ line 1))
			(loop (+ ptr 1) line))))))
	   (start-go-to-end-all
	    (lambda ()
	      (set! start-offset (+ start-offset (- end-ptr start-ptr)))
	      (let loop ((ptr start-ptr)
			 (line start-line)
			 (column start-column))
		(if (= ptr end-ptr)
		    (begin
		      (set! start-ptr ptr)
		      (set! start-line line)
		      (set! start-column column))
		    (if (char=? (string-ref buffer ptr) #\newline)
			(loop (+ ptr 1) (+ line 1) 1)
			(loop (+ ptr 1) line (+ column 1)))))))
	   (start-go-to-user-none
	    (lambda ()
	      (set! start-ptr user-ptr)))
	   (start-go-to-user-line
	    (lambda ()
	      (set! start-ptr user-ptr)
	      (set! start-line user-line)))
	   (start-go-to-user-all
	    (lambda ()
	      (set! start-line user-line)
	      (set! start-offset user-offset)
	      (if user-up-to-date?
		  (begin
		    (set! start-ptr user-ptr)
		    (set! start-column user-column))
		  (let loop ((ptr start-ptr) (column start-column))
		    (if (= ptr user-ptr)
			(begin
			  (set! start-ptr ptr)
			  (set! start-column column))
			(if (char=? (string-ref buffer ptr) #\newline)
			    (loop (+ ptr 1) 1)
			    (loop (+ ptr 1) (+ column 1))))))))
	   (end-go-to-point
	    (lambda ()
	      (set! end-ptr point-ptr)))
	   (point-go-to-start
	    (lambda ()
	      (set! point-ptr start-ptr)))
	   (user-go-to-start-none
	    (lambda ()
	      (set! user-ptr start-ptr)))
	   (user-go-to-start-line
	    (lambda ()
	      (set! user-ptr start-ptr)
	      (set! user-line start-line)))
	   (user-go-to-start-all
	    (lambda ()
	      (set! user-ptr start-ptr)
	      (set! user-line start-line)
	      (set! user-column start-column)
	      (set! user-offset start-offset)
	      (set! user-up-to-date? #t)))
	   (init-lexeme-none             ; Debute un nouveau lexeme
	    (lambda ()
	      (if (< start-ptr user-ptr)
		  (start-go-to-user-none))
	      (point-go-to-start)))
	   (init-lexeme-line
	    (lambda ()
	      (if (< start-ptr user-ptr)
		  (start-go-to-user-line))
	      (point-go-to-start)))
	   (init-lexeme-all
	    (lambda ()
	      (if (< start-ptr user-ptr)
		  (start-go-to-user-all))
	      (point-go-to-start)))
	   (get-start-line               ; Obtention des stats du debut du lxm
	    (lambda ()
	      start-line))
	   (get-start-column
	    (lambda ()
	      start-column))
	   (get-start-offset
	    (lambda ()
	      start-offset))
	   (peek-left-context            ; Obtention de caracteres (#f si EOF)
	    (lambda ()
	      (char->integer (string-ref buffer (- start-ptr 1)))))
	   (peek-char
	    (lambda ()
	      (if (< point-ptr read-ptr)
		  (char->integer (string-ref buffer point-ptr))
		  (let ((c (input-f)))
		    (if (char? c)
			(begin
			  (if (= read-ptr buflen)
			      (reorganize-buffer))
			  (string-set! buffer point-ptr c)
			  (set! read-ptr (+ point-ptr 1))
			  (char->integer c))
			(begin
			  (set! input-f (lambda () 'eof))
			  #f))))))
	   (read-char
	    (lambda ()
	      (if (< point-ptr read-ptr)
		  (let ((c (string-ref buffer point-ptr)))
		    (set! point-ptr (+ point-ptr 1))
		    (char->integer c))
		  (let ((c (input-f)))
		    (if (char? c)
			(begin
			  (if (= read-ptr buflen)
			      (reorganize-buffer))
			  (string-set! buffer point-ptr c)
			  (set! read-ptr (+ point-ptr 1))
			  (set! point-ptr read-ptr)
			  (char->integer c))
			(begin
			  (set! input-f (lambda () 'eof))
			  #f))))))
	   (get-start-end-text           ; Obtention du lexeme
	    (lambda ()
	      (substring buffer start-ptr end-ptr)))
	   (get-user-line-line           ; Fonctions pour l'usager
	    (lambda ()
	      (if (< user-ptr start-ptr)
		  (user-go-to-start-line))
	      user-line))
	   (get-user-line-all
	    (lambda ()
	      (if (< user-ptr start-ptr)
		  (user-go-to-start-all))
	      user-line))
	   (get-user-column-all
	    (lambda ()
	      (cond ((< user-ptr start-ptr)
		     (user-go-to-start-all)
		     user-column)
		    (user-up-to-date?
		     user-column)
		    (else
		     (let loop ((ptr start-ptr) (column start-column))
		       (if (= ptr user-ptr)
			   (begin
			     (set! user-column column)
			     (set! user-up-to-date? #t)
			     column)
			   (if (char=? (string-ref buffer ptr) #\newline)
			       (loop (+ ptr 1) 1)
			       (loop (+ ptr 1) (+ column 1)))))))))
	   (get-user-offset-all
	    (lambda ()
	      (if (< user-ptr start-ptr)
		  (user-go-to-start-all))
	      user-offset))
	   (user-getc-none
	    (lambda ()
	      (if (< user-ptr start-ptr)
		  (user-go-to-start-none))
	      (if (< user-ptr read-ptr)
		  (let ((c (string-ref buffer user-ptr)))
		    (set! user-ptr (+ user-ptr 1))
		    c)
		  (let ((c (input-f)))
		    (if (char? c)
			(begin
			  (if (= read-ptr buflen)
			      (reorganize-buffer))
			  (string-set! buffer user-ptr c)
			  (set! read-ptr (+ read-ptr 1))
			  (set! user-ptr read-ptr)
			  c)
			(begin
			  (set! input-f (lambda () 'eof))
			  'eof))))))
	   (user-getc-line
	    (lambda ()
	      (if (< user-ptr start-ptr)
		  (user-go-to-start-line))
	      (if (< user-ptr read-ptr)
		  (let ((c (string-ref buffer user-ptr)))
		    (set! user-ptr (+ user-ptr 1))
		    (if (char=? c #\newline)
			(set! user-line (+ user-line 1)))
		    c)
		  (let ((c (input-f)))
		    (if (char? c)
			(begin
			  (if (= read-ptr buflen)
			      (reorganize-buffer))
			  (string-set! buffer user-ptr c)
			  (set! read-ptr (+ read-ptr 1))
			  (set! user-ptr read-ptr)
			  (if (char=? c #\newline)
			      (set! user-line (+ user-line 1)))
			  c)
			(begin
			  (set! input-f (lambda () 'eof))
			  'eof))))))
	   (user-getc-all
	    (lambda ()
	      (if (< user-ptr start-ptr)
		  (user-go-to-start-all))
	      (if (< user-ptr read-ptr)
		  (let ((c (string-ref buffer user-ptr)))
		    (set! user-ptr (+ user-ptr 1))
		    (if (char=? c #\newline)
			(begin
			  (set! user-line (+ user-line 1))
			  (set! user-column 1))
			(set! user-column (+ user-column 1)))
		    (set! user-offset (+ user-offset 1))
		    c)
		  (let ((c (input-f)))
		    (if (char? c)
			(begin
			  (if (= read-ptr buflen)
			      (reorganize-buffer))
			  (string-set! buffer user-ptr c)
			  (set! read-ptr (+ read-ptr 1))
			  (set! user-ptr read-ptr)
			  (if (char=? c #\newline)
			      (begin
				(set! user-line (+ user-line 1))
				(set! user-column 1))
			      (set! user-column (+ user-column 1)))
			  (set! user-offset (+ user-offset 1))
			  c)
			(begin
			  (set! input-f (lambda () 'eof))
			  'eof))))))
	   (user-ungetc-none
	    (lambda ()
	      (if (> user-ptr start-ptr)
		  (set! user-ptr (- user-ptr 1)))))
	   (user-ungetc-line
	    (lambda ()
	      (if (> user-ptr start-ptr)
		  (begin
		    (set! user-ptr (- user-ptr 1))
		    (let ((c (string-ref buffer user-ptr)))
		      (if (char=? c #\newline)
			  (set! user-line (- user-line 1))))))))
	   (user-ungetc-all
	    (lambda ()
	      (if (> user-ptr start-ptr)
		  (begin
		    (set! user-ptr (- user-ptr 1))
		    (let ((c (string-ref buffer user-ptr)))
		      (if (char=? c #\newline)
			  (begin
			    (set! user-line (- user-line 1))
			    (set! user-up-to-date? #f))
			  (set! user-column (- user-column 1)))
		      (set! user-offset (- user-offset 1)))))))
	   (reorganize-buffer            ; Decaler ou agrandir le buffer
	    (lambda ()
	      (if (< (* 2 start-ptr) buflen)
		  (let* ((newlen (* 2 buflen))
			 (newbuf (make-string newlen))
			 (delta (- start-ptr 1)))
		    (let loop ((from (- start-ptr 1)))
		      (if (< from buflen)
			  (begin
			    (string-set! newbuf
					 (- from delta)
					 (string-ref buffer from))
			    (loop (+ from 1)))))
		    (set! buffer    newbuf)
		    (set! buflen    newlen)
		    (set! read-ptr  (- read-ptr delta))
		    (set! start-ptr (- start-ptr delta))
		    (set! end-ptr   (- end-ptr delta))
		    (set! point-ptr (- point-ptr delta))
		    (set! user-ptr  (- user-ptr delta)))
		  (let ((delta (- start-ptr 1)))
		    (let loop ((from (- start-ptr 1)))
		      (if (< from buflen)
			  (begin
			    (string-set! buffer
					 (- from delta)
					 (string-ref buffer from))
			    (loop (+ from 1)))))
		    (set! read-ptr  (- read-ptr delta))
		    (set! start-ptr (- start-ptr delta))
		    (set! end-ptr   (- end-ptr delta))
		    (set! point-ptr (- point-ptr delta))
		    (set! user-ptr  (- user-ptr delta)))))))
	(list (cons 'start-go-to-end
		    (cond ((eq? counters 'none) start-go-to-end-none)
			  ((eq? counters 'line) start-go-to-end-line)
			  ((eq? counters 'all ) start-go-to-end-all)))
	      (cons 'end-go-to-point
		    end-go-to-point)
	      (cons 'init-lexeme
		    (cond ((eq? counters 'none) init-lexeme-none)
			  ((eq? counters 'line) init-lexeme-line)
			  ((eq? counters 'all ) init-lexeme-all)))
	      (cons 'get-start-line
		    get-start-line)
	      (cons 'get-start-column
		    get-start-column)
	      (cons 'get-start-offset
		    get-start-offset)
	      (cons 'peek-left-context
		    peek-left-context)
	      (cons 'peek-char
		    peek-char)
	      (cons 'read-char
		    read-char)
	      (cons 'get-start-end-text
		    get-start-end-text)
	      (cons 'get-user-line
		    (cond ((eq? counters 'none) #f)
			  ((eq? counters 'line) get-user-line-line)
			  ((eq? counters 'all ) get-user-line-all)))
	      (cons 'get-user-column
		    (cond ((eq? counters 'none) #f)
			  ((eq? counters 'line) #f)
			  ((eq? counters 'all ) get-user-column-all)))
	      (cons 'get-user-offset
		    (cond ((eq? counters 'none) #f)
			  ((eq? counters 'line) #f)
			  ((eq? counters 'all ) get-user-offset-all)))
	      (cons 'user-getc
		    (cond ((eq? counters 'none) user-getc-none)
			  ((eq? counters 'line) user-getc-line)
			  ((eq? counters 'all ) user-getc-all)))
	      (cons 'user-ungetc
		    (cond ((eq? counters 'none) user-ungetc-none)
			  ((eq? counters 'line) user-ungetc-line)
			  ((eq? counters 'all ) user-ungetc-all))))))))

; Construit un Input System
; Le premier parametre doit etre parmi "port", "procedure" ou "string"
; Prend un parametre facultatif qui doit etre parmi
; "none", "line" ou "all"
(define lexer-make-IS
  (lambda (input-type input . largs)
    (let ((counters-type (cond ((null? largs)
				'line)
			       ((memq (car largs) '(none line all))
				(car largs))
			       (else
				'line))))
      (cond ((and (eq? input-type 'port) (input-port? input))
	     (let* ((buffer   (make-string lexer-init-buffer-len #\newline))
		    (read-ptr 1)
		    (input-f  (lambda () (read-char input))))
	       (lexer-raw-IS-maker buffer read-ptr input-f counters-type)))
	    ((and (eq? input-type 'procedure) (procedure? input))
	     (let* ((buffer   (make-string lexer-init-buffer-len #\newline))
		    (read-ptr 1)
		    (input-f  input))
	       (lexer-raw-IS-maker buffer read-ptr input-f counters-type)))
	    ((and (eq? input-type 'string) (string? input))
	     (let* ((buffer   (string-append (string #\newline) input))
		    (read-ptr (string-length buffer))
		    (input-f  (lambda () 'eof)))
	       (lexer-raw-IS-maker buffer read-ptr input-f counters-type)))
	    (else
	     (let* ((buffer   (string #\newline))
		    (read-ptr 1)
		    (input-f  (lambda () 'eof)))
	       (lexer-raw-IS-maker buffer read-ptr input-f counters-type)))))))

; Les fonctions:
;   lexer-get-func-getc, lexer-get-func-ungetc,
;   lexer-get-func-line, lexer-get-func-column et lexer-get-func-offset
(define lexer-get-func-getc
  (lambda (IS) (cdr (assq 'user-getc IS))))
(define lexer-get-func-ungetc
  (lambda (IS) (cdr (assq 'user-ungetc IS))))
(define lexer-get-func-line
  (lambda (IS) (cdr (assq 'get-user-line IS))))
(define lexer-get-func-column
  (lambda (IS) (cdr (assq 'get-user-column IS))))
(define lexer-get-func-offset
  (lambda (IS) (cdr (assq 'get-user-offset IS))))

;
; Gestion des lexers
;

; Fabrication de lexer a partir d'arbres de decision
(define lexer-make-tree-lexer
  (lambda (tables IS)
    (letrec
	(; Contenu de la table
	 (counters-type        (vector-ref tables 0))
	 (<<EOF>>-pre-action   (vector-ref tables 1))
	 (<<ERROR>>-pre-action (vector-ref tables 2))
	 (rules-pre-actions    (vector-ref tables 3))
	 (table-nl-start       (vector-ref tables 5))
	 (table-no-nl-start    (vector-ref tables 6))
	 (trees-v              (vector-ref tables 7))
	 (acc-v                (vector-ref tables 8))

	 ; Contenu du IS
	 (IS-start-go-to-end    (cdr (assq 'start-go-to-end IS)))
	 (IS-end-go-to-point    (cdr (assq 'end-go-to-point IS)))
	 (IS-init-lexeme        (cdr (assq 'init-lexeme IS)))
	 (IS-get-start-line     (cdr (assq 'get-start-line IS)))
	 (IS-get-start-column   (cdr (assq 'get-start-column IS)))
	 (IS-get-start-offset   (cdr (assq 'get-start-offset IS)))
	 (IS-peek-left-context  (cdr (assq 'peek-left-context IS)))
	 (IS-peek-char          (cdr (assq 'peek-char IS)))
	 (IS-read-char          (cdr (assq 'read-char IS)))
	 (IS-get-start-end-text (cdr (assq 'get-start-end-text IS)))
	 (IS-get-user-line      (cdr (assq 'get-user-line IS)))
	 (IS-get-user-column    (cdr (assq 'get-user-column IS)))
	 (IS-get-user-offset    (cdr (assq 'get-user-offset IS)))
	 (IS-user-getc          (cdr (assq 'user-getc IS)))
	 (IS-user-ungetc        (cdr (assq 'user-ungetc IS)))

	 ; Resultats
	 (<<EOF>>-action   #f)
	 (<<ERROR>>-action #f)
	 (rules-actions    #f)
	 (states           #f)
	 (final-lexer      #f)

	 ; Gestion des hooks
	 (hook-list '())
	 (add-hook
	  (lambda (thunk)
	    (set! hook-list (cons thunk hook-list))))
	 (apply-hooks
	  (lambda ()
	    (let loop ((l hook-list))
	      (if (pair? l)
		  (begin
		    ((car l))
		    (loop (cdr l)))))))

	 ; Preparation des actions
	 (set-action-statics
	  (lambda (pre-action)
	    (pre-action final-lexer IS-user-getc IS-user-ungetc)))
	 (prepare-special-action-none
	  (lambda (pre-action)
	    (let ((action #f))
	      (let ((result
		     (lambda ()
		       (action "")))
		    (hook
		     (lambda ()
		       (set! action (set-action-statics pre-action)))))
		(add-hook hook)
		result))))
	 (prepare-special-action-line
	  (lambda (pre-action)
	    (let ((action #f))
	      (let ((result
		     (lambda (yyline)
		       (action "" yyline)))
		    (hook
		     (lambda ()
		       (set! action (set-action-statics pre-action)))))
		(add-hook hook)
		result))))
	 (prepare-special-action-all
	  (lambda (pre-action)
	    (let ((action #f))
	      (let ((result
		     (lambda (yyline yycolumn yyoffset)
		       (action "" yyline yycolumn yyoffset)))
		    (hook
		     (lambda ()
		       (set! action (set-action-statics pre-action)))))
		(add-hook hook)
		result))))
	 (prepare-special-action
	  (lambda (pre-action)
	    (cond ((eq? counters-type 'none)
		   (prepare-special-action-none pre-action))
		  ((eq? counters-type 'line)
		   (prepare-special-action-line pre-action))
		  ((eq? counters-type 'all)
		   (prepare-special-action-all  pre-action)))))
	 (prepare-action-yytext-none
	  (lambda (pre-action)
	    (let ((get-start-end-text IS-get-start-end-text)
		  (start-go-to-end    IS-start-go-to-end)
		  (action             #f))
	      (let ((result
		     (lambda ()
		       (let ((yytext (get-start-end-text)))
			 (start-go-to-end)
			 (action yytext))))
		    (hook
		     (lambda ()
		       (set! action (set-action-statics pre-action)))))
		(add-hook hook)
		result))))
	 (prepare-action-yytext-line
	  (lambda (pre-action)
	    (let ((get-start-end-text IS-get-start-end-text)
		  (start-go-to-end    IS-start-go-to-end)
		  (action             #f))
	      (let ((result
		     (lambda (yyline)
		       (let ((yytext (get-start-end-text)))
			 (start-go-to-end)
			 (action yytext yyline))))
		    (hook
		     (lambda ()
		       (set! action (set-action-statics pre-action)))))
		(add-hook hook)
		result))))
	 (prepare-action-yytext-all
	  (lambda (pre-action)
	    (let ((get-start-end-text IS-get-start-end-text)
		  (start-go-to-end    IS-start-go-to-end)
		  (action             #f))
	      (let ((result
		     (lambda (yyline yycolumn yyoffset)
		       (let ((yytext (get-start-end-text)))
			 (start-go-to-end)
			 (action yytext yyline yycolumn yyoffset))))
		    (hook
		     (lambda ()
		       (set! action (set-action-statics pre-action)))))
		(add-hook hook)
		result))))
	 (prepare-action-yytext
	  (lambda (pre-action)
	    (cond ((eq? counters-type 'none)
		   (prepare-action-yytext-none pre-action))
		  ((eq? counters-type 'line)
		   (prepare-action-yytext-line pre-action))
		  ((eq? counters-type 'all)
		   (prepare-action-yytext-all  pre-action)))))
	 (prepare-action-no-yytext-none
	  (lambda (pre-action)
	    (let ((start-go-to-end    IS-start-go-to-end)
		  (action             #f))
	      (let ((result
		     (lambda ()
		       (start-go-to-end)
		       (action)))
		    (hook
		     (lambda ()
		       (set! action (set-action-statics pre-action)))))
		(add-hook hook)
		result))))
	 (prepare-action-no-yytext-line
	  (lambda (pre-action)
	    (let ((start-go-to-end    IS-start-go-to-end)
		  (action             #f))
	      (let ((result
		     (lambda (yyline)
		       (start-go-to-end)
		       (action yyline)))
		    (hook
		     (lambda ()
		       (set! action (set-action-statics pre-action)))))
		(add-hook hook)
		result))))
	 (prepare-action-no-yytext-all
	  (lambda (pre-action)
	    (let ((start-go-to-end    IS-start-go-to-end)
		  (action             #f))
	      (let ((result
		     (lambda (yyline yycolumn yyoffset)
		       (start-go-to-end)
		       (action yyline yycolumn yyoffset)))
		    (hook
		     (lambda ()
		       (set! action (set-action-statics pre-action)))))
		(add-hook hook)
		result))))
	 (prepare-action-no-yytext
	  (lambda (pre-action)
	    (cond ((eq? counters-type 'none)
		   (prepare-action-no-yytext-none pre-action))
		  ((eq? counters-type 'line)
		   (prepare-action-no-yytext-line pre-action))
		  ((eq? counters-type 'all)
		   (prepare-action-no-yytext-all  pre-action)))))

	 ; Fabrique les fonctions de dispatch
	 (prepare-dispatch-err
	  (lambda (leaf)
	    (lambda (c)
	      #f)))
	 (prepare-dispatch-number
	  (lambda (leaf)
	    (let ((state-function #f))
	      (let ((result
		     (lambda (c)
		       state-function))
		    (hook
		     (lambda ()
		       (set! state-function (vector-ref states leaf)))))
		(add-hook hook)
		result))))
	 (prepare-dispatch-leaf
	  (lambda (leaf)
	    (if (eq? leaf 'err)
		(prepare-dispatch-err leaf)
		(prepare-dispatch-number leaf))))
	 (prepare-dispatch-<
	  (lambda (tree)
	    (let ((left-tree  (list-ref tree 1))
		  (right-tree (list-ref tree 2)))
	      (let ((bound      (list-ref tree 0))
		    (left-func  (prepare-dispatch-tree left-tree))
		    (right-func (prepare-dispatch-tree right-tree)))
		(lambda (c)
		  (if (< c bound)
		      (left-func c)
		      (right-func c)))))))
	 (prepare-dispatch-=
	  (lambda (tree)
	    (let ((left-tree  (list-ref tree 2))
		  (right-tree (list-ref tree 3)))
	      (let ((bound      (list-ref tree 1))
		    (left-func  (prepare-dispatch-tree left-tree))
		    (right-func (prepare-dispatch-tree right-tree)))
		(lambda (c)
		  (if (= c bound)
		      (left-func c)
		      (right-func c)))))))
	 (prepare-dispatch-tree
	  (lambda (tree)
	    (cond ((not (pair? tree))
		   (prepare-dispatch-leaf tree))
		  ((eq? (car tree) '=)
		   (prepare-dispatch-= tree))
		  (else
		   (prepare-dispatch-< tree)))))
	 (prepare-dispatch
	  (lambda (tree)
	    (let ((dicho-func (prepare-dispatch-tree tree)))
	      (lambda (c)
		(and c (dicho-func c))))))

	 ; Fabrique les fonctions de transition (read & go) et (abort)
	 (prepare-read-n-go
	  (lambda (tree)
	    (let ((dispatch-func (prepare-dispatch tree))
		  (read-char     IS-read-char))
	      (lambda ()
		(dispatch-func (read-char))))))
	 (prepare-abort
	  (lambda (tree)
	    (lambda ()
	      #f)))
	 (prepare-transition
	  (lambda (tree)
	    (if (eq? tree 'err)
		(prepare-abort     tree)
		(prepare-read-n-go tree))))

	 ; Fabrique les fonctions d'etats ([set-end] & trans)
	 (prepare-state-no-acc
	   (lambda (s r1 r2)
	     (let ((trans-func (prepare-transition (vector-ref trees-v s))))
	       (lambda (action)
		 (let ((next-state (trans-func)))
		   (if next-state
		       (next-state action)
		       action))))))
	 (prepare-state-yes-no
	  (lambda (s r1 r2)
	    (let ((peek-char       IS-peek-char)
		  (end-go-to-point IS-end-go-to-point)
		  (new-action1     #f)
		  (trans-func (prepare-transition (vector-ref trees-v s))))
	      (let ((result
		     (lambda (action)
		       (let* ((c (peek-char))
			      (new-action
			       (if (or (not c) (= c lexer-integer-newline))
				   (begin
				     (end-go-to-point)
				     new-action1)
				   action))
			      (next-state (trans-func)))
			 (if next-state
			     (next-state new-action)
			     new-action))))
		    (hook
		     (lambda ()
		       (set! new-action1 (vector-ref rules-actions r1)))))
		(add-hook hook)
		result))))
	 (prepare-state-diff-acc
	  (lambda (s r1 r2)
	    (let ((end-go-to-point IS-end-go-to-point)
		  (peek-char       IS-peek-char)
		  (new-action1     #f)
		  (new-action2     #f)
		  (trans-func (prepare-transition (vector-ref trees-v s))))
	      (let ((result
		     (lambda (action)
		       (end-go-to-point)
		       (let* ((c (peek-char))
			      (new-action
			       (if (or (not c) (= c lexer-integer-newline))
				   new-action1
				   new-action2))
			      (next-state (trans-func)))
			 (if next-state
			     (next-state new-action)
			     new-action))))
		    (hook
		     (lambda ()
		       (set! new-action1 (vector-ref rules-actions r1))
		       (set! new-action2 (vector-ref rules-actions r2)))))
		(add-hook hook)
		result))))
	 (prepare-state-same-acc
	  (lambda (s r1 r2)
	    (let ((end-go-to-point IS-end-go-to-point)
		  (trans-func (prepare-transition (vector-ref trees-v s)))
		  (new-action #f))
	      (let ((result
		     (lambda (action)
		       (end-go-to-point)
		       (let ((next-state (trans-func)))
			 (if next-state
			     (next-state new-action)
			     new-action))))
		    (hook
		     (lambda ()
		       (set! new-action (vector-ref rules-actions r1)))))
		(add-hook hook)
		result))))
	 (prepare-state
	  (lambda (s)
	    (let* ((acc (vector-ref acc-v s))
		   (r1 (car acc))
		   (r2 (cdr acc)))
	      (cond ((not r1)  (prepare-state-no-acc   s r1 r2))
		    ((not r2)  (prepare-state-yes-no   s r1 r2))
		    ((< r1 r2) (prepare-state-diff-acc s r1 r2))
		    (else      (prepare-state-same-acc s r1 r2))))))

	 ; Fabrique la fonction de lancement du lexage a l'etat de depart
	 (prepare-start-same
	  (lambda (s1 s2)
	    (let ((peek-char    IS-peek-char)
		  (eof-action   #f)
		  (start-state  #f)
		  (error-action #f))
	      (let ((result
		     (lambda ()
		       (if (not (peek-char))
			   eof-action
			   (start-state error-action))))
		    (hook
		     (lambda ()
		       (set! eof-action   <<EOF>>-action)
		       (set! start-state  (vector-ref states s1))
		       (set! error-action <<ERROR>>-action))))
		(add-hook hook)
		result))))
	 (prepare-start-diff
	  (lambda (s1 s2)
	    (let ((peek-char         IS-peek-char)
		  (eof-action        #f)
		  (peek-left-context IS-peek-left-context)
		  (start-state1      #f)
		  (start-state2      #f)
		  (error-action      #f))
	      (let ((result
		     (lambda ()
		       (cond ((not (peek-char))
			      eof-action)
			     ((= (peek-left-context) lexer-integer-newline)
			      (start-state1 error-action))
			     (else
			      (start-state2 error-action)))))
		    (hook
		     (lambda ()
		       (set! eof-action <<EOF>>-action)
		       (set! start-state1 (vector-ref states s1))
		       (set! start-state2 (vector-ref states s2))
		       (set! error-action <<ERROR>>-action))))
		(add-hook hook)
		result))))
	 (prepare-start
	  (lambda ()
	    (let ((s1 table-nl-start)
		  (s2 table-no-nl-start))
	      (if (= s1 s2)
		  (prepare-start-same s1 s2)
		  (prepare-start-diff s1 s2)))))

	 ; Fabrique la fonction principale
	 (prepare-lexer-none
	  (lambda ()
	    (let ((init-lexeme IS-init-lexeme)
		  (start-func  (prepare-start)))
	      (lambda ()
		(init-lexeme)
		((start-func))))))
	 (prepare-lexer-line
	  (lambda ()
	    (let ((init-lexeme    IS-init-lexeme)
		  (get-start-line IS-get-start-line)
		  (start-func     (prepare-start)))
	      (lambda ()
		(init-lexeme)
		(let ((yyline (get-start-line)))
		  ((start-func) yyline))))))
	 (prepare-lexer-all
	  (lambda ()
	    (let ((init-lexeme      IS-init-lexeme)
		  (get-start-line   IS-get-start-line)
		  (get-start-column IS-get-start-column)
		  (get-start-offset IS-get-start-offset)
		  (start-func       (prepare-start)))
	      (lambda ()
		(init-lexeme)
		(let ((yyline   (get-start-line))
		      (yycolumn (get-start-column))
		      (yyoffset (get-start-offset)))
		  ((start-func) yyline yycolumn yyoffset))))))
	 (prepare-lexer
	  (lambda ()
	    (cond ((eq? counters-type 'none) (prepare-lexer-none))
		  ((eq? counters-type 'line) (prepare-lexer-line))
		  ((eq? counters-type 'all)  (prepare-lexer-all))))))

      ; Calculer la valeur de <<EOF>>-action et de <<ERROR>>-action
      (set! <<EOF>>-action   (prepare-special-action <<EOF>>-pre-action))
      (set! <<ERROR>>-action (prepare-special-action <<ERROR>>-pre-action))

      ; Calculer la valeur de rules-actions
      (let* ((len (quotient (vector-length rules-pre-actions) 2))
	     (v (make-vector len)))
	(let loop ((r (- len 1)))
	  (if (< r 0)
	      (set! rules-actions v)
	      (let* ((yytext? (vector-ref rules-pre-actions (* 2 r)))
		     (pre-action (vector-ref rules-pre-actions (+ (* 2 r) 1)))
		     (action (if yytext?
				 (prepare-action-yytext    pre-action)
				 (prepare-action-no-yytext pre-action))))
		(vector-set! v r action)
		(loop (- r 1))))))

      ; Calculer la valeur de states
      (let* ((len (vector-length trees-v))
	     (v (make-vector len)))
	(let loop ((s (- len 1)))
	  (if (< s 0)
	      (set! states v)
	      (begin
		(vector-set! v s (prepare-state s))
		(loop (- s 1))))))

      ; Calculer la valeur de final-lexer
      (set! final-lexer (prepare-lexer))

      ; Executer les hooks
      (apply-hooks)

      ; Resultat
      final-lexer)))

; Fabrication de lexer a partir de listes de caracteres taggees
(define lexer-make-char-lexer
  (let* ((char->class
	  (lambda (c)
	    (let ((n (char->integer c)))
	      (list (cons n n)))))
	 (merge-sort
	  (lambda (l combine zero-elt)
	    (if (null? l)
		zero-elt
		(let loop1 ((l l))
		  (if (null? (cdr l))
		      (car l)
		      (loop1
		       (let loop2 ((l l))
			 (cond ((null? l)
				l)
			       ((null? (cdr l))
				l)
			       (else
				(cons (combine (car l) (cadr l))
				      (loop2 (cddr l))))))))))))
	 (finite-class-union
	  (lambda (c1 c2)
	    (let loop ((c1 c1) (c2 c2) (u '()))
	      (if (null? c1)
		  (if (null? c2)
		      (reverse u)
		      (loop c1 (cdr c2) (cons (car c2) u)))
		  (if (null? c2)
		      (loop (cdr c1) c2 (cons (car c1) u))
		      (let* ((r1 (car c1))
			     (r2 (car c2))
			     (r1start (car r1))
			     (r1end (cdr r1))
			     (r2start (car r2))
			     (r2end (cdr r2)))
			(if (<= r1start r2start)
			    (cond ((< (+ r1end 1) r2start)
				   (loop (cdr c1) c2 (cons r1 u)))
				  ((<= r1end r2end)
				   (loop (cdr c1)
					 (cons (cons r1start r2end) (cdr c2))
					 u))
				  (else
				   (loop c1 (cdr c2) u)))
			    (cond ((> r1start (+ r2end 1))
				   (loop c1 (cdr c2) (cons r2 u)))
				  ((>= r1end r2end)
				   (loop (cons (cons r2start r1end) (cdr c1))
					 (cdr c2)
					 u))
				  (else
				   (loop (cdr c1) c2 u))))))))))
	 (char-list->class
	  (lambda (cl)
	    (let ((classes (map char->class cl)))
	      (merge-sort classes finite-class-union '()))))
	 (class-<
	  (lambda (b1 b2)
	    (cond ((eq? b1 'inf+) #f)
		  ((eq? b2 'inf-) #f)
		  ((eq? b1 'inf-) #t)
		  ((eq? b2 'inf+) #t)
		  (else (< b1 b2)))))
	 (finite-class-compl
	  (lambda (c)
	    (let loop ((c c) (start 'inf-))
	      (if (null? c)
		  (list (cons start 'inf+))
		  (let* ((r (car c))
			 (rstart (car r))
			 (rend (cdr r)))
		    (if (class-< start rstart)
			(cons (cons start (- rstart 1))
			      (loop c rstart))
			(loop (cdr c) (+ rend 1))))))))
	 (tagged-chars->class
	  (lambda (tcl)
	    (let* ((inverse? (car tcl))
		   (cl (cdr tcl))
		   (class-tmp (char-list->class cl)))
	      (if inverse? (finite-class-compl class-tmp) class-tmp))))
	 (charc->arc
	  (lambda (charc)
	    (let* ((tcl (car charc))
		   (dest (cdr charc))
		   (class (tagged-chars->class tcl)))
	      (cons class dest))))
	 (arc->sharcs
	  (lambda (arc)
	    (let* ((range-l (car arc))
		   (dest (cdr arc))
		   (op (lambda (range) (cons range dest))))
	      (map op range-l))))
	 (class-<=
	  (lambda (b1 b2)
	    (cond ((eq? b1 'inf-) #t)
		  ((eq? b2 'inf+) #t)
		  ((eq? b1 'inf+) #f)
		  ((eq? b2 'inf-) #f)
		  (else (<= b1 b2)))))
	 (sharc-<=
	  (lambda (sharc1 sharc2)
	    (class-<= (caar sharc1) (caar sharc2))))
	 (merge-sharcs
	  (lambda (l1 l2)
	    (let loop ((l1 l1) (l2 l2))
	      (cond ((null? l1)
		     l2)
		    ((null? l2)
		     l1)
		    (else
		     (let ((sharc1 (car l1))
			   (sharc2 (car l2)))
		       (if (sharc-<= sharc1 sharc2)
			   (cons sharc1 (loop (cdr l1) l2))
			   (cons sharc2 (loop l1 (cdr l2))))))))))
	 (class-= eqv?)
	 (fill-error
	  (lambda (sharcs)
	    (let loop ((sharcs sharcs) (start 'inf-))
	      (cond ((class-= start 'inf+)
		     '())
		    ((null? sharcs)
		     (cons (cons (cons start 'inf+) 'err)
			   (loop sharcs 'inf+)))
		    (else
		     (let* ((sharc (car sharcs))
			    (h (caar sharc))
			    (t (cdar sharc)))
		       (if (class-< start h)
			   (cons (cons (cons start (- h 1)) 'err)
				 (loop sharcs h))
			   (cons sharc (loop (cdr sharcs)
					     (if (class-= t 'inf+)
						 'inf+
						 (+ t 1)))))))))))
	 (charcs->tree
	  (lambda (charcs)
	    (let* ((op (lambda (charc) (arc->sharcs (charc->arc charc))))
		   (sharcs-l (map op charcs))
		   (sorted-sharcs (merge-sort sharcs-l merge-sharcs '()))
		   (full-sharcs (fill-error sorted-sharcs))
		   (op (lambda (sharc) (cons (caar sharc) (cdr sharc))))
		   (table (list->vector (map op full-sharcs))))
	      (let loop ((left 0) (right (- (vector-length table) 1)))
		(if (= left right)
		    (cdr (vector-ref table left))
		    (let ((mid (quotient (+ left right 1) 2)))
		      (if (and (= (+ left 2) right)
			       (= (+ (car (vector-ref table mid)) 1)
				  (car (vector-ref table right)))
			       (eqv? (cdr (vector-ref table left))
				     (cdr (vector-ref table right))))
			  (list '=
				(car (vector-ref table mid))
				(cdr (vector-ref table mid))
				(cdr (vector-ref table left)))
			  (list (car (vector-ref table mid))
				(loop left (- mid 1))
				(loop mid right))))))))))
    (lambda (tables IS)
      (let ((counters         (vector-ref tables 0))
	    (<<EOF>>-action   (vector-ref tables 1))
	    (<<ERROR>>-action (vector-ref tables 2))
	    (rules-actions    (vector-ref tables 3))
	    (nl-start         (vector-ref tables 5))
	    (no-nl-start      (vector-ref tables 6))
	    (charcs-v         (vector-ref tables 7))
	    (acc-v            (vector-ref tables 8)))
	(let* ((len (vector-length charcs-v))
	       (v (make-vector len)))
	  (let loop ((i (- len 1)))
	    (if (>= i 0)
		(begin
		  (vector-set! v i (charcs->tree (vector-ref charcs-v i)))
		  (loop (- i 1)))
		(lexer-make-tree-lexer
		 (vector counters
			 <<EOF>>-action
			 <<ERROR>>-action
			 rules-actions
			 'decision-trees
			 nl-start
			 no-nl-start
			 v
			 acc-v)
		 IS))))))))

; Fabrication d'un lexer a partir de code pre-genere
(define lexer-make-code-lexer
  (lambda (tables IS)
    (let ((<<EOF>>-pre-action   (vector-ref tables 1))
	  (<<ERROR>>-pre-action (vector-ref tables 2))
	  (rules-pre-action     (vector-ref tables 3))
	  (code                 (vector-ref tables 5)))
      (code <<EOF>>-pre-action <<ERROR>>-pre-action rules-pre-action IS))))

(define lexer-make-lexer
  (lambda (tables IS)
    (let ((automaton-type (vector-ref tables 4)))
      (cond ((eq? automaton-type 'decision-trees)
	     (lexer-make-tree-lexer tables IS))
	    ((eq? automaton-type 'tagged-chars-lists)
	     (lexer-make-char-lexer tables IS))
	    ((eq? automaton-type 'code)
	     (lexer-make-code-lexer tables IS))))))

;
; Table generated from the file clce.l by SILex 1.0
;

(define lexer-default-table
  (vector
   'line
   (lambda (yycontinue yygetc yyungetc)
     (lambda (yytext yyline)
                              '*EOI*-tok
       ))
   (lambda (yycontinue yygetc yyungetc)
     (lambda (yytext yyline)
                              (lexer-error)
       ))
   (vector
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              (yycontinue)
        ))
    #t
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yytext yyline)
                              (cons 'NUMBER-tok (string->number yytext))
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
        (yycontinue)
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'NOT-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'AND-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'EITHER-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'OR-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'NEITHER-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'NOR-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'IF-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'THEN-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'A-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'AN-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'SOME-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'SOMETHING-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'SOMEONE-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'FOR-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'EVERY-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'EVERYTHING-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'EVERYONE-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'NO-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'NOTHING-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'ONE-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'WHO-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'WHAT-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'WHEN-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'WHICH-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'IS-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'HAS-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'HAVE-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'DOES-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'THAT-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'THE-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
          		      'NO_ONE-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'NONE-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'OTHERS-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'NOTHING-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'ELSE-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'OF-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'THAN-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'AS-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'THERE-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'SUCH-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'ONLY-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'FÁLSE-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'IT-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'TRUE-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'DECLARE-tok
        ))
    #t
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yytext yyline)
                              (cons 'NAME-tok yytext)
        ))
    #t
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yytext yyline)
                              (cons 'CHARSTRING-tok yytext)
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'LPAREN-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'RPAREN-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'COMMA-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'ELLIPSIS-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'PERIOD-tok
        ))
    #f
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yyline)
                              'QUESTIONMARK-tok
        ))
    #t
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yytext yyline)
                              (cons 'VARIABLE-tok yytext)
        ))
    #t
    (lambda (yycontinue yygetc yyungetc)
      (lambda (yytext yyline)
                              (let ((f (assoc yytext dictionary)))
                                   (if f
                                       (cons (cdr f) (car f))
                                       (lexer-error)))
        )))
   'decision-trees
   0
   0
   '#((74 (46 (35 (32 (= 10 28 err) (33 28 (34 err 8))) (41 (39 err (40 9
    7)) (44 (42 6 err) (45 5 err)))) (66 (58 (47 4 (48 err 27)) (64 (63 err
    3) (65 err 19))) (70 (68 1 (69 11 23)) (72 (71 15 1) (73 12 21)))))
    (102 (87 (80 (78 1 (79 26 14)) (84 (83 1 17) (85 10 1))) (97 (88 13 (91
    2 err)) (100 (98 24 1) (101 11 23)))) (112 (105 (103 16 (104 1 12))
    (110 (106 21 1) (111 25 22))) (117 (115 1 (116 18 20)) (120 (119 1 13)
    (123 2 err)))))) (65 (48 err (58 1 err)) (97 (91 1 err) (123 1 err)))
    (65 (48 err (58 2 err)) (97 (91 1 err) (123 1 err))) err (= 46 29 err)
    err err err (= 34 err 30) (= 39 err 31) (91 (58 (48 err 1) (65 err 1))
    (104 (97 err 1) (105 32 (123 1 err)))) (97 (58 (48 err 1) (65 err (91 1
    err))) (111 (= 101 33 1) (112 34 (123 1 err)))) (91 (58 (48 err 1) (65
    err 1)) (98 (97 err 35) (123 1 err))) (91 (58 (48 err 2) (65 err 1))
    (104 (97 err 1) (105 36 (123 1 err)))) (97 (58 (48 err 1) (65 err (91 1
    err))) (116 (= 110 38 1) (117 37 (123 1 err)))) (91 (58 (48 err 1) (65
    err 1)) (111 (97 err 1) (112 39 (123 1 err)))) (97 (58 (48 err 1) (65
    err (91 1 err))) (111 (98 40 1) (112 39 (123 1 err)))) (91 (58 (48 err
    1) (65 err 1)) (111 (97 err 1) (112 41 (123 1 err)))) (97 (58 (48 err
    1) (65 err (91 1 err))) (117 (= 111 41 1) (118 42 (123 1 err)))) (91
    (58 (48 err 1) (65 err 1)) (110 (97 err 1) (111 43 (123 1 err)))) (97
    (58 (48 err 1) (65 err (91 1 err))) (114 (= 104 45 1) (115 44 (123 1
    err)))) (102 (65 (48 err (58 1 err)) (91 1 (97 err 1))) (116 (103 48
    (115 1 47)) (117 46 (123 1 err)))) (103 (65 (48 err (58 1 err)) (97 (91
    1 err) (102 1 49))) (115 (111 (110 1 38) (114 1 50)) (117 (116 1 37)
    (123 1 err)))) (105 (65 (48 err (58 1 err)) (91 1 (97 err 1))) (109
    (106 53 (108 1 51)) (119 (118 1 52) (123 1 err)))) (97 (58 (48 err 1)
    (65 err (91 1 err))) (115 (= 110 55 1) (116 54 (123 1 err)))) (97 (58
    (48 err 1) (65 err (91 1 err))) (111 (= 101 56 1) (112 57 (123 1
    err)))) (97 (58 (48 err 1) (65 err (91 1 err))) (111 (= 101 56 1) (112
    58 (123 1 err)))) (48 err (58 27 err)) (11 (10 err 28) (= 32 28 err))
    (= 46 59 err) (= 34 60 err) (= 39 61 err) (97 (58 (48 err 1) (65 err
    (91 1 err))) (101 (98 63 1) (102 62 (123 1 err)))) (91 (58 (48 err 1)
    (65 err 1)) (99 (97 err 1) (100 64 (123 1 err)))) (91 (58 (48 err 1)
    (65 err 1)) (101 (97 err 1) (102 65 (123 1 err)))) (97 (58 (48 err 1)
    (65 err (91 1 err))) (118 (= 115 67 1) (119 66 (123 1 err)))) (101 (65
    (48 err (58 1 err)) (97 (91 1 err) (98 70 1))) (106 (102 69 (105 1 68))
    (112 (111 1 71) (123 1 err)))) (91 (58 (48 err 1) (65 err 1)) (104 (97
    err 1) (105 72 (123 1 err)))) (97 (58 (48 err 1) (65 err (91 1 err)))
    (108 (= 101 74 1) (109 73 (123 1 err)))) (91 (58 (48 err 1) (65 err 1))
    (114 (97 err 1) (115 75 (123 1 err)))) (91 (58 (48 err 1) (65 err 1))
    (108 (97 err 1) (109 76 (123 1 err)))) (91 (58 (48 err 1) (65 err 1))
    (109 (97 err 1) (110 77 (123 1 err)))) (91 (58 (48 err 1) (65 err 1))
    (99 (97 err 1) (100 78 (123 1 err)))) (65 (48 err (58 1 err)) (97 (91 1
    err) (123 1 err))) (91 (58 (48 err 1) (65 err 1)) (117 (97 err 1) (118
    79 (123 1 err)))) (97 (58 (48 err 1) (65 err (91 1 err))) (101 (98 80
    1) (102 81 (123 1 err)))) (65 (48 err (58 1 err)) (97 (91 1 err) (123 1
    err))) (65 (48 err (58 1 err)) (97 (91 1 err) (123 1 err))) (65 (48 err
    (58 1 err)) (97 (91 1 err) (123 1 err))) (65 (48 err (58 1 err)) (97
    (91 1 err) (123 1 err))) (65 (48 err (58 1 err)) (97 (91 1 err) (123 1
    err))) (91 (58 (48 err 1) (65 err 1)) (115 (97 err 1) (116 82 (123 1
    err)))) (91 (58 (48 err 1) (65 err 1)) (101 (97 err 1) (102 83 (123 1
    err)))) (91 (58 (48 err 1) (65 err 1)) (116 (97 err 1) (117 84 (123 1
    err)))) (65 (48 err (58 1 err)) (97 (91 1 err) (123 1 err))) (91 (58
    (48 err 1) (65 err 1)) (100 (97 err 1) (101 85 (123 1 err)))) (91 (58
    (48 err 1) (65 err 1)) (105 (97 err 1) (106 86 (123 1 err)))) (97 (48
    (= 32 88 err) (65 (58 1 err) (91 1 err))) (115 (111 (110 1 87) (114 1
    89)) (117 (116 1 90) (123 1 err)))) (91 (48 (= 32 88 err) (58 1 (65 err
    1))) (111 (97 err (110 1 87)) (117 (116 1 91) (123 1 err)))) err err
    err (91 (58 (48 err 1) (65 err 1)) (114 (97 err 1) (115 92 (123 1
    err)))) (91 (58 (48 err 1) (65 err 1)) (116 (97 err 1) (117 93 (123 1
    err)))) (91 (58 (48 err 1) (65 err 1)) (108 (97 err 1) (109 94 (123 1
    err)))) (91 (58 (48 err 1) (65 err 1)) (115 (97 err 1) (116 95 (123 1
    err)))) (91 (58 (48 err 1) (65 err 1)) (101 (97 err 1) (102 96 (123 1
    err)))) (65 (48 err (58 1 err)) (97 (91 1 err) (123 1 err))) (91 (58
    (48 err 1) (65 err 1)) (99 (97 err 1) (100 97 (123 1 err)))) (91 (58
    (48 err 1) (65 err 1)) (110 (97 err 1) (111 98 (123 1 err)))) (91 (58
    (48 err 1) (65 err 1)) (116 (97 err 1) (117 99 (123 1 err)))) (65 (48
    err (58 1 err)) (97 (91 1 err) (123 1 err))) (91 (58 (48 err 1) (65 err
    1)) (101 (97 err 1) (102 100 (123 1 err)))) (91 (58 (48 err 1) (65 err
    1)) (121 (97 err 1) (122 101 (123 1 err)))) (65 (48 err (58 1 err)) (97
    (91 1 err) (123 1 err))) (65 (48 err (58 1 err)) (97 (91 1 err) (123 1
    err))) (91 (58 (48 err 1) (65 err 1)) (115 (97 err 1) (116 102 (123 1
    err)))) (91 (58 (48 err 1) (65 err 1)) (101 (97 err 1) (102 103 (123 1
    err)))) (91 (58 (48 err 1) (65 err 1)) (104 (97 err 1) (105 104 (123 1
    err)))) (91 (58 (48 err 1) (65 err 1)) (101 (97 err 1) (102 105 (123 1
    err)))) (97 (58 (48 err 1) (65 err (91 1 err))) (116 (= 110 106 1) (117
    93 (123 1 err)))) (97 (58 (48 err 1) (65 err (91 1 err))) (114 (= 110
    107 1) (115 92 (123 1 err)))) (91 (58 (48 err 1) (65 err 1)) (101 (97
    err 1) (102 108 (123 1 err)))) (91 (58 (48 err 1) (65 err 1)) (114 (97
    err 1) (115 109 (123 1 err)))) (91 (58 (48 err 1) (65 err 1)) (104 (97
    err 1) (105 110 (123 1 err)))) (65 (48 err (58 1 err)) (97 (91 1 err)
    (123 1 err))) (91 (58 (48 err 1) (65 err 1)) (116 (97 err 1) (117 111
    (123 1 err)))) (91 (58 (48 err 1) (65 err 1)) (101 (97 err 1) (102 112
    (123 1 err)))) (= 111 113 err) (65 (48 err (58 1 err)) (97 (91 1 err)
    (123 1 err))) (91 (58 (48 err 1) (65 err 1)) (104 (97 err 1) (105 114
    (123 1 err)))) (97 (58 (48 err 1) (65 err (91 1 err))) (104 (= 101 115
    1) (105 114 (123 1 err)))) (91 (58 (48 err 1) (65 err 1)) (101 (97 err
    1) (102 116 (123 1 err)))) (65 (48 err (58 1 err)) (97 (91 1 err) (123
    1 err))) (91 (58 (48 err 1) (65 err 1)) (98 (97 err 117) (123 1 err)))
    (65 (48 err (58 1 err)) (97 (91 1 err) (123 1 err))) (65 (48 err (58 1
    err)) (97 (91 1 err) (123 1 err))) (91 (58 (48 err 1) (65 err 1)) (104
    (97 err 1) (105 118 (123 1 err)))) (65 (48 err (58 1 err)) (97 (91 1
    err) (123 1 err))) (65 (48 err (58 1 err)) (97 (91 1 err) (123 1 err)))
    (91 (58 (48 err 1) (65 err 1)) (114 (97 err 1) (115 119 (123 1 err))))
    (65 (48 err (58 1 err)) (97 (91 1 err) (123 1 err))) (91 (58 (48 err 1)
    (65 err 1)) (101 (97 err 1) (102 120 (123 1 err)))) (97 (58 (48 err 1)
    (65 err (91 1 err))) (116 (= 111 121 1) (117 122 (123 1 err)))) (65 (48
    err (58 1 err)) (97 (91 1 err) (123 1 err))) (65 (48 err (58 1 err))
    (97 (91 1 err) (123 1 err))) (65 (48 err (58 1 err)) (97 (91 1 err)
    (123 1 err))) (65 (48 err (58 1 err)) (97 (91 1 err) (123 1 err))) (65
    (48 err (58 1 err)) (97 (91 1 err) (123 1 err))) (91 (58 (48 err 1) (65
    err 1)) (121 (97 err 1) (122 123 (123 1 err)))) (91 (58 (48 err 1) (65
    err 1)) (101 (97 err 1) (102 124 (123 1 err)))) (91 (58 (48 err 1) (65
    err 1)) (104 (97 err 1) (105 125 (123 1 err)))) (65 (48 err (58 1 err))
    (97 (91 1 err) (123 1 err))) (= 110 126 err) (91 (58 (48 err 1) (65 err
    1)) (105 (97 err 1) (106 127 (123 1 err)))) (65 (58 (48 err 1) (59 128
    err)) (97 (91 1 err) (123 1 err))) (65 (48 err (58 1 err)) (97 (91 1
    err) (123 1 err))) (91 (58 (48 err 1) (65 err 1)) (114 (97 err 1) (115
    129 (123 1 err)))) (65 (48 err (58 1 err)) (97 (91 1 err) (123 1 err)))
    (91 (58 (48 err 1) (65 err 1)) (115 (97 err 1) (116 130 (123 1 err))))
    (65 (48 err (58 1 err)) (97 (91 1 err) (123 1 err))) (91 (58 (48 err 1)
    (65 err 1)) (110 (97 err 1) (111 131 (123 1 err)))) (91 (58 (48 err 1)
    (65 err 1)) (104 (97 err 1) (105 132 (123 1 err)))) (97 (58 (48 err 1)
    (65 err (91 1 err))) (116 (= 111 133 1) (117 134 (123 1 err)))) (91 (58
    (48 err 1) (65 err 1)) (114 (97 err 1) (115 135 (123 1 err)))) (91 (58
    (48 err 1) (65 err 1)) (101 (97 err 1) (102 136 (123 1 err)))) (= 101
    137 err) (91 (58 (48 err 1) (65 err 1)) (110 (97 err 1) (111 138 (123 1
    err)))) (= 46 139 128) (91 (58 (48 err 1) (65 err 1)) (101 (97 err 1)
    (102 140 (123 1 err)))) (65 (48 err (58 1 err)) (97 (91 1 err) (123 1
    err))) (91 (58 (48 err 1) (65 err 1)) (101 (97 err 1) (102 141 (123 1
    err)))) (91 (58 (48 err 1) (65 err 1)) (105 (97 err 1) (106 142 (123 1
    err)))) (91 (58 (48 err 1) (65 err 1)) (110 (97 err 1) (111 143 (123 1
    err)))) (91 (58 (48 err 1) (65 err 1)) (104 (97 err 1) (105 144 (123 1
    err)))) (65 (48 err (58 1 err)) (97 (91 1 err) (123 1 err))) (91 (58
    (48 err 1) (65 err 1)) (114 (97 err 1) (115 145 (123 1 err)))) err (91
    (58 (48 err 1) (65 err 1)) (103 (97 err 1) (104 146 (123 1 err)))) err
    (65 (48 err (58 1 err)) (97 (91 1 err) (123 1 err))) (65 (48 err (58 1
    err)) (97 (91 1 err) (123 1 err))) (91 (58 (48 err 1) (65 err 1)) (110
    (97 err 1) (111 147 (123 1 err)))) (91 (58 (48 err 1) (65 err 1)) (101
    (97 err 1) (102 148 (123 1 err)))) (91 (58 (48 err 1) (65 err 1)) (105
    (97 err 1) (106 149 (123 1 err)))) (65 (48 err (58 1 err)) (97 (91 1
    err) (123 1 err))) (65 (48 err (58 1 err)) (97 (91 1 err) (123 1 err)))
    (91 (58 (48 err 1) (65 err 1)) (103 (97 err 1) (104 150 (123 1 err))))
    (65 (48 err (58 1 err)) (97 (91 1 err) (123 1 err))) (91 (58 (48 err 1)
    (65 err 1)) (110 (97 err 1) (111 151 (123 1 err)))) (65 (48 err (58 1
    err)) (97 (91 1 err) (123 1 err))) (91 (58 (48 err 1) (65 err 1)) (103
    (97 err 1) (104 152 (123 1 err)))) (65 (48 err (58 1 err)) (97 (91 1
    err) (123 1 err))))
   '#((#f . #f) (57 . 57) (56 . 56) (55 . 55) (54 . 54) (52 . 52) (51 . 51)
    (50 . 50) (#f . #f) (#f . #f) (57 . 57) (57 . 57) (57 . 57) (56 . 56)
    (57 . 57) (57 . 57) (57 . 57) (57 . 57) (57 . 57) (11 . 11) (57 . 57)
    (57 . 57) (57 . 57) (57 . 57) (11 . 11) (57 . 57) (57 . 57) (1 . 1) (0
    . 0) (#f . #f) (#f . #f) (#f . #f) (57 . 57) (57 . 57) (57 . 57) (57 .
    57) (57 . 57) (57 . 57) (57 . 57) (57 . 57) (57 . 57) (57 . 57) (57 .
    57) (12 . 12) (57 . 57) (57 . 57) (45 . 45) (27 . 27) (9 . 9) (38 . 38)
    (6 . 6) (57 . 57) (57 . 57) (57 . 57) (40 . 40) (12 . 12) (57 . 57) (20
    . 20) (20 . 20) (53 . 53) (49 . 49) (48 . 48) (32 . 32) (57 . 57) (57 .
    57) (57 . 57) (57 . 57) (28 . 28) (57 . 57) (57 . 57) (57 . 57) (23 .
    23) (57 . 57) (57 . 57) (22 . 22) (16 . 16) (57 . 57) (57 . 57) (57 .
    57) (57 . 57) (57 . 57) (32 . 32) (57 . 57) (57 . 57) (57 . 57) (4 . 4)
    (57 . 57) (57 . 57) (#f . #f) (8 . 8) (3 . 3) (3 . 3) (57 . 57) (31 .
    31) (57 . 57) (30 . 30) (29 . 29) (57 . 57) (25 . 25) (24 . 24) (57 .
    57) (43 . 43) (57 . 57) (13 . 13) (42 . 42) (46 . 46) (39 . 39) (10 .
    10) (37 . 37) (57 . 57) (57 . 57) (57 . 57) (34 . 34) (#f . #f) (57 .
    57) (57 . 57) (41 . 41) (57 . 57) (26 . 26) (57 . 57) (44 . 44) (57 .
    57) (57 . 57) (17 . 17) (57 . 57) (57 . 57) (#f . #f) (57 . 57) (#f .
    #f) (57 . 57) (35 . 35) (57 . 57) (57 . 57) (57 . 57) (57 . 57) (5 . 5)
    (57 . 57) (33 . 33) (57 . 57) (2 . 2) (47 . 47) (15 . 15) (57 . 57) (57
    . 57) (57 . 57) (7 . 7) (21 . 21) (57 . 57) (19 . 19) (57 . 57) (14 .
    14) (57 . 57) (18 . 18))))

;
; User functions
;

(define lexer #f)

(define lexer-get-line   #f)
(define lexer-getc       #f)
(define lexer-ungetc     #f)

(define lexer-init
  (lambda (input-type input)
    (let ((IS (lexer-make-IS input-type input 'line)))
      (set! lexer (lexer-make-lexer lexer-default-table IS))
      (set! lexer-get-line   (lexer-get-func-line IS))
      (set! lexer-getc       (lexer-get-func-getc IS))
      (set! lexer-ungetc     (lexer-get-func-ungetc IS)))))
