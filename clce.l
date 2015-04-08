
letter [a-zA-Z]
digit  [0-9]

%%

[ \n]+                        (yycontinue)
{digit}+                      (cons 'NUMBER-tok (string->number yytext))
Note:[^\.]*\.                      
[Nn]ot                        'NOT-tok
and                           'AND-tok
[Ee]ither                     'EITHER-tok
or                            'OR-tok
[Nn]either                    'NEITHER-tok
nor                           'NOR-tok
[Ii]f                         'IF-tok
then                          'THEN-tok
[Aa]                          'A-tok
[Aa]n                         'AN-tok
[Ss]ome                       'SOME-tok
[Ss]omething                  'SOMETHING-tok
[Ss]omeone                    'SOMEONE-tok
[Ff]or                        'FOR-tok
[Ee]very                      'EVERY-tok
[Ee]verything                 'EVERYTHING-tok
[Ee]veryone                   'EVERYONE-tok
[Nn]o                         'NO-tok
[Nn]othing                    'NOTHING-tok
[Oo]ne                        'ONE-tok
[Ww]ho                        'WHO-tok
[Ww]hat                       'WHAT-tok
[Ww]hen                       'WHEN-tok
[Ww]hich                      'WHICH-tok

[Ii]s                         'IS-tok
[Hh]as                        'HAS-tok
[Hh]ave                       'HAVE-tok
[Dd]oes                       'DOES-tok

[Tt]hat                       'THAT-tok
[Tt]he                        'THE-tok

[Nn]o\ one		      'NO_ONE-tok
[Nn]one                       'NONE-tok
[Oo]thers                     'OTHERS-tok
[Nn]othing                    'NOTHING-tok
[Ee]lse                       'ELSE-tok
of                            'OF-tok
than                          'THAN-tok
as                            'AS-tok

[Tt]here                      'THERE-tok
such                          'SUCH-tok
[Oo]nly                       'ONLY-tok
"false"                       'FALSE-tok
[Ii]t                         'IT-tok
true                          'TRUE-tok

[Dd]eclare                    'DECLARE-tok

"'"[^']"'"                    (cons 'NAME-tok yytext)
"\""[^"]"\""                  (cons 'CHARSTRING-tok yytext)
"("                           'LPAREN-tok
")"                           'RPAREN-tok
","                           'COMMA-tok
"..."                         'ELLIPSIS-tok
"."                           'PERIOD-tok
"?"                           'QUESTIONMARK-tok

[XxYyZzWw]{digit}*            (cons 'VARIABLE-tok yytext)


{letter}({letter}|{digit})*   (let ((f (assoc yytext dictionary)))
                                   (if f
                                       (cons (cdr f) (car f))
                                       (lexer-error)))

<<EOF>>                       '*EOI*-tok
<<ERROR>>                     (lexer-error)
