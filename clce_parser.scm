; recursive descent parser for clce

(define-macro (RHS . args)
  (if (pair? args)
      `(let ((v1 ,(car args)))
            (if v1
	        (let ((vr (RHS ,@(cdr args))))
	             (if vr
		         (cons v1 vr)
		         #f))
	        #f))
       ''()))

(define-macro (define-rule . args)
  `(define (,(car args))
      (let ((v1  ,(cadr args)))
            (if v1
	        (cons ',(car args) v1)
		#f))))

; Rules

(define-rule Sentence
  (or (RHS (Declarative)
	   (match 'PERIOD-tok))
      (RHS (Interrogative)
	   (match 'QUESTIONMARK-tok))))

(define-rule Interrogative
  (or (RHS (Conditional)
	   (match 'COMMA-tok)
	   (SimpleInterrogative))
      (SimpleInterrogative)))

(define-rule SimpleInterrogative
  (or (RHS (WhPhrase)
	   (VerbP))
      (RHS (match 'IS-tok)
	   (match 'IT-tok)
	   (match 'TRUE-tok)
	   (match 'THAT-tok)
	   (Declarative))))

(define-rule WhPhrase
  (or (match 'WHO-tok)
      (match 'WHAT-tok)
      (match 'WHEN-tok)
      (RHS (match 'WHICH-tok)
	   (Term))))

(define-rule LogPrefix
  (or (RHS (match 'FOR-tok)
	   (UniversalNP)
	   (match 'COMMA-tok))
      (RHS (match 'THERE-tok)
	   (match 'IS-tok)
	   (ExistentialNP)
	   (match 'SUCH-tok)
	   (match 'THAT-tok))
      (RHS (match 'IT-tok)
	   (match 'IS-tok)
	   (match 'FALSE-tok)
	   (match 'THAT-tok))))

(define-rule Declarative
  (or (RHS (LogPrefix)
	   (Declarative))
      (SimpleD)
      (ComplexD)
      (CompoundD)))

(define-rule SimpleD
  (or (PrepositionalNounVerbP)
      (RHS (match 'THERE-tok)
	   (match 'IS-tok)
	   (ThereIsNP))))

(define-rule ThereIsNP
  (or (ExistentialNP)
      (NegExistentialNP)))

(define-rule PrepositionalNounVerbP
  (or (RHS (PrepositionalP)
	   (match 'COMMA-tok)
	   (PrepositionalNounVerbP))
      (RHS (NounP)
	   (VerbP))))

(define-rule ExistentialNounP
  (or (RHS (SomeThingOne)
	   (match 'VARIABLE-tok))
      (SomeThingOne)
      (RHS (match 'THE-tok)
	   (match 'FUNCTIONALNOUN-tok)
	   (TheFunctionalNounP))))

(define-rule TheFunctionalNounP
  (or (RHS (match 'VARIABLE-tok)
	   (match 'OF-tok)
	   (ListP))
      (RHS (match 'OF-tok)
	   (ListP))))

(define-rule NegExistentialNounP
  (or (RHS (NothingOne)
	   (or (match 'VARIABLE-tok)
	       #t))
      (RHS (match 'NO-tok)
	   (or (Term)
	       (RHS (match 'FUNCTIONALNOUN-tok)
		    (or (RHS (match 'VARIABLE-tok)
			     (match 'OF-tok)
			     (ListP))
			(RHS (match 'OF-tok)
			     (ListP))))))))

(define-rule SomeThingOne
  (or (match 'SOMETHING-tok)
      (match 'SOMEONE-tok)))

(define-rule NothingOne
  (or (match 'NOTHING-tok)
      (RHS (match 'NO-tok)
	   (match 'ONE-tok))))

(define-rule ComplexD
  (or (RHS (Conditional)
	   (match 'COMMA-tok)
	   (match 'THEN-tok)
	   (ParenDS))
      (RHS (LogPrefixParenDS)
	   (or (RHS (match 'IF-tok)
		    (match 'AND-tok)
		    (match 'ONLY-tok)
		    (Conditional))
	       (RHS (match 'ONLY-tok)
		    (Conditional))))))

(define-rule Conditional
  (RHS (match 'IF-tok)
       (Declarative)))

(define-rule LogPrefixParenDS
  (or (RHS (LogPrefix)
	   (LogPrefixParenDS))
      (ParenDS)))

(define-rule ParenDS
  (or (SimpleDS)
      (RHS (match 'LPAREN-tok)
	   (or (ComplexD)
	       (CompoundD))
	   (match 'RPAREN-tok))))

(define-rule SimpleDS
  (or (RHS (PrepositionalP)
	   (NounP)
	   (VerbP))
      (RHS (NounP)
	   (VerbP))
      (RHS (match 'THERE-tok)
	   (match 'IS-tok)
	   (or (ExistentialNP)
	       (NegExistentialNP)))))

(define-rule CompoundD
  (or (CompoundAndD)
      (RHS (match 'EITHER-tok)
	   (CompoundOrD))))

(define-rule CompoundAndD
  (RHS (ParenDS)
       (or (RHS (match 'AND-tok)
		(ParenDS))
	   (RHS (match 'COMMA-tok)
		(CompoundAndD)))))

(define-rule CompoundOrD
  (RHS (ParenDS)
       (or (RHS (match 'OR-tok)
		(ParenDS))
	   (RHS (match 'COMMA-tok)
		(CompoundOrD)))))

(define-rule UniversalNP
  (or (RHS (or (match 'EVERYTHING-tok)
	       (match 'EVERYONE-tok))
	   (or (match 'VARIABLE-tok) #t))
      (RHS (match 'EVERY-tok)
	   (Term))))

(define-rule Term
  (or (RHS (match 'ADJECTIVE-tok)
	   (Term))
      (RHS (match 'RELATIONALNOUN-tok)
	   (or (RHS (match 'VARIABLE-tok)
		    (match 'OF-tok)
		    (ListP))
	       (RHS (match 'OF-tok)
		    (ListP))))
      (RHS (match 'NOUN-tok)
	   (or (RHS (match 'VARIABLE-tok)
		    (or (Postmodifier) #t))
	       (or (Postmodifier) #t)))))

(define-rule Postmodifier
  (or (Comparison)
      (RHS (match 'THAT-tok)
	   (VerbP))))

(define-rule VerbP
  (or (RHS (SimpleVP)
	   (or (RHS (match 'AND-tok)
		    (SimpleVP))
	       #t))
      (RHS (match 'EITHER-tok)
	   (EitherSimpleVP))
      (RHS (match 'IS-tok)
	   (or (RHS (PredComp)
		    (match 'AND-tok)
		    (PredComp))
	       (RHS (match 'EITHER-tok)
		    (EitherPredComp))))))

(define-rule EitherSimpleVP
  (or (RHS (SimpleVP)
	   (or (RHS (match 'COMMA-tok)
		    (EitherSimpleVP))
	       (RHS (match 'OR-tok)
		    (SimpleVP))))))

(define-rule EitherPredComp
  (or (RHS (PredComp)
	   (or (RHS (match 'COMMA-tok)
		    (EitherPredComp))
	       (RHS (match 'OR-tok)
		    (PredComp))))))

(define-rule SimpleVP
  (or (RHS (match 'IS-tok)
	   (or (RHS (PredComp)
		    (or (RHS (match 'AND-tok)
			     (PredComp))
			#t))
	       (RHS (match 'EITHER-tok)
		    (EitherPredComp))))
      (RHS (match 'HAS-tok)
	   (SimpleNP)
	   (match 'AS-tok)
	   (or (match 'RELATIONALNOUN-tok)
	       (match 'FUNCTIONALNOUN-tok)))
      (RHS (match 'DOES-tok)
	   (match 'NOT-tok)
	   (match 'HAVE-tok)
	   (SimpleNP)
	   (match 'AS-tok)
	   (or (match 'FUNTIONALNOUN-tok)
	       (match 'RELATIONALNOUN-tok)))
      (RHS (match 'VERBSING-tok)
	   (SimpleNP)
	   (or (PrepositionalP)
	       (SimpleNP)
	       #t))
      (RHS (match 'DOES-tok)
	   (match 'NOT-tok)
	   (match 'VERBINF-tok)
	   (SimpleNP)
	   (or (PrepositionalP)
	       #t))
      (RHS (match 'IS-tok)
	   (or (RHS (match 'NOT-tok)
		    (match 'VERBPASTPART-tok)
		    (or (SimpleNP)
			#t))
	       (RHS (match 'VERBPASTPART-tok)
		    (or (SimpleNP)
			#t))))))

(define-rule PredComp
  (or (RHS (match 'NOT-tok)
	   (PredCompDetail))
      (PredCompDetail)))

(define-rule SimpleNP
  (or (ExistentialNP)
      (ReferentialNP)))

(define-rule PredCompDetail
  (or (match 'ADJECTIVE-tok)
      (SimpleNP)
      (Comparison)
      (PrepositionalP)))

(define-rule Comparison
  (RHS (match 'COMPARATIVE-tok)
       (match 'THAN-tok)
       (SimpleNP)))

(define-rule PrepositionalP
  (RHS (match 'PREPOSITION-tok)
       (ListP)))

(define-rule ListP
  (or (RHS (SimpleNP)
	   (or (RHS (match 'AND-tok)
		    (SimpleNP))
	       #t))
      (RHS (match 'LPAREN-tok)
	   (SimpleNP)
	   (match 'COMMA-tok)
	   (ParenList)
	   (match 'RPAREN-tok))))

(define-rule ParenList
  (or (RHS (SimpleNP)
	   (ParenList))
      (match 'ELLIPSIS-tok)
      (RHS (match 'AND-tok)
	   (or (match 'OTHERS-tok)
	       (RHS (match 'NOTHING-tok)
		    (match 'ELSE-tok))
	       (RHS (match 'NO-tok)
		    (match 'ONE-tok)
		    (match 'ELSE-tok))
	       (SimpleNP)))))

(define-rule NounP
  (or (ExistentialNP)
      (UniversalNP)
      (NegExistentialNP)
      (ReferentialNP)))

(define-rule ExistentialNP
  (or (RHS (or (match 'SOMETHING-tok)
	       (match 'SOMEONE-tok))
	   (or (match 'VARIABLE-tok)
	       #t))
      (RHS (match 'THE-tok)
	   (match 'FUNCTIONALNOUN-tok)
	   (or (RHS (match 'VARIABLE-tok)
		    (match 'OF-tok)
		    (ListP))
	       (RHS (match 'OF-tok)
		    (ListP))))
      (RHS (or (match 'A-tok)
	       (match 'AN-tok)
	       (match 'SOME-tok))
	   (Term))))

(define-rule NegExistentialNP
  (or (RHS (match 'NOTHING-tok)
	   (or (match 'VARIABLE-tok)
	       #t))
      (RHS (match 'NO-tok)
	   (or (RHS (match 'ONE-tok)
	            (or (match 'VARIABLE-tok)
	                #t))
	       (Term)
	       (RHS (match 'FUNCTIONALNOUN-tok)
		    (or (RHS (match 'VARIABLE-tok)
			     (match 'OF-tok)
			     (ListP))
			(RHS (match 'OF-tok)
			     (ListP))))))))

(define-rule ReferentialNP
  (or (GeneralName)
      (RHS (match 'THE-tok)
	   (RHS (or (match 'NOUN-tok)
	            (match 'RELATIONALNOUN-tok)
	            (match 'FUNCTIONALNOUN-tok))
		(or (GeneralName)
		    #t)))))

(define-rule GeneralName
  (or (match 'NAME-tok)
      (match 'VARIABLE-tok)
      (match 'NUMBER-tok)
      (match 'CHARSTRING-tok)))

(define ttop #f)
(define (match token)
  (if (not ttop) (set! ttop (lexer)))
  (if (or (eq? ttop token) (and (pair? ttop) (eq? (car ttop) token)))
      (let ((res ttop))
	   (set! ttop #f)
;;           (display token)
	   res)
      (begin
	  #f)))

(define (lexer-error)
    (display "lexer error:\n")
;    (alert (string-append "lexer error:\n" (lexer-get-line)))
)

(define (clce s)
  (with-input-from-string (symbol->string s)
     (lambda ()
        (lexer-init 'port (current-input-port))
        (Sentence)
     )
  )
)


