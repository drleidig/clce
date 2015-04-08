;    % gsi clce
;
; Include lexer and parser.

(include "clce_l.scm") ; defines function "lexer", "lexer-init", etc.
(include "clce_parser.scm") ; defines function "parser"
(include "dictionary.scm") ; defines dictionary

(define (main)

  ; initialize lexer

  (lexer-init 'port (current-input-port))

  ; parse program and get it's AST

  (let ((ast (Sentence)))

    ; convert program to prefix notation and print it out

    (write ast)
    (newline))
)

; Error handling.

(define (lexer-error)
  (display-line)
  (display "LEXER ERROR : illegal character")
  (newline)
  (exit 1))

(define (display-line)
  (display "(line ")
  (display (lexer-get-line))
  (display ") "))

; Run it.

(main)
