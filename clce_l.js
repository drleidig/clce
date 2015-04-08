/* Exported Variables */
var BgL_lexerzd2rawzd2ISzd2makerzd2;
var BgL_lexerzd2makezd2ISz00;
var BgL_lexerzd2initzd2bufferzd2lenzd2;
var BgL_lexerzd2getzd2funczd2ungetczd2;
var BgL_lexerzd2getzd2funczd2linezd2;
var BgL_lexerzd2initzd2;
var BgL_lexerzd2getzd2funczd2columnzd2;
var BgL_lexerzd2defaultzd2tablez00;
var BgL_lexerzd2makezd2treezd2lexerzd2;
var BgL_lexerzd2getzd2linez00;
var BgL_lexerzd2makezd2charzd2lexerzd2;
var BgL_lexerzd2makezd2lexerz00;
var BgL_lexerzd2makezd2codezd2lexerzd2;
var BgL_lexerzd2getczd2;
var BgL_lexerzd2getzd2funczd2getczd2;
var BgL_lexerzd2ungetczd2;
var BgL_lexerzd2integerzd2newlinez00;
var BgL_lexerzd2getzd2funczd2offsetzd2;
var lexer;
/* End Exports */

var BgL_sc_mergezd2sharcs_1zd2_clce_l;
var BgL_sc_classzd2zc3_2z11_clce_l;
var BgL_sc_finitezd2classzd2union_3z00_clce_l;
var BgL_sc_mergezd2sort_4zd2_clce_l;
var BgL_sc_charzd2ze3class_5z31_clce_l;
var const_clce_l;
var sc_const_6_clce_l;
var sc_const_7_clce_l;
{
  (sc_const_7_clce_l = (new sc_Pair("none",(new sc_Pair("line",(new sc_Pair("all",null)))))));
  (sc_const_6_clce_l = [(new sc_Pair((74),(new sc_Pair((new sc_Pair((46),(new sc_Pair((new sc_Pair((35),(new sc_Pair((new sc_Pair((32),(new sc_Pair((new sc_Pair("=",(new sc_Pair((10),(new sc_Pair((28),(new sc_Pair("err",null)))))))),(new sc_Pair((new sc_Pair((33),(new sc_Pair((28),(new sc_Pair((new sc_Pair((34),(new sc_Pair("err",(new sc_Pair((8),null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((41),(new sc_Pair((new sc_Pair((39),(new sc_Pair("err",(new sc_Pair((new sc_Pair((40),(new sc_Pair((9),(new sc_Pair((7),null)))))),null)))))),(new sc_Pair((new sc_Pair((44),(new sc_Pair((new sc_Pair((42),(new sc_Pair((6),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((45),(new sc_Pair((5),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((66),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((47),(new sc_Pair((4),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((27),null)))))),null)))))),(new sc_Pair((new sc_Pair((64),(new sc_Pair((new sc_Pair((63),(new sc_Pair("err",(new sc_Pair((3),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((19),null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((70),(new sc_Pair((new sc_Pair((68),(new sc_Pair((1),(new sc_Pair((new sc_Pair((69),(new sc_Pair((11),(new sc_Pair((23),null)))))),null)))))),(new sc_Pair((new sc_Pair((72),(new sc_Pair((new sc_Pair((71),(new sc_Pair((15),(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((73),(new sc_Pair((12),(new sc_Pair((21),null)))))),null)))))),null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((102),(new sc_Pair((new sc_Pair((87),(new sc_Pair((new sc_Pair((80),(new sc_Pair((new sc_Pair((78),(new sc_Pair((1),(new sc_Pair((new sc_Pair((79),(new sc_Pair((26),(new sc_Pair((14),null)))))),null)))))),(new sc_Pair((new sc_Pair((84),(new sc_Pair((new sc_Pair((83),(new sc_Pair((1),(new sc_Pair((17),null)))))),(new sc_Pair((new sc_Pair((85),(new sc_Pair((10),(new sc_Pair((1),null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((88),(new sc_Pair((13),(new sc_Pair((new sc_Pair((91),(new sc_Pair((2),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((100),(new sc_Pair((new sc_Pair((98),(new sc_Pair((24),(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((101),(new sc_Pair((11),(new sc_Pair((23),null)))))),null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((112),(new sc_Pair((new sc_Pair((105),(new sc_Pair((new sc_Pair((103),(new sc_Pair((16),(new sc_Pair((new sc_Pair((104),(new sc_Pair((1),(new sc_Pair((12),null)))))),null)))))),(new sc_Pair((new sc_Pair((110),(new sc_Pair((new sc_Pair((106),(new sc_Pair((21),(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((111),(new sc_Pair((25),(new sc_Pair((22),null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((117),(new sc_Pair((new sc_Pair((115),(new sc_Pair((1),(new sc_Pair((new sc_Pair((116),(new sc_Pair((18),(new sc_Pair((20),null)))))),null)))))),(new sc_Pair((new sc_Pair((120),(new sc_Pair((new sc_Pair((119),(new sc_Pair((1),(new sc_Pair((13),null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((2),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((2),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), "err", (new sc_Pair("=",(new sc_Pair((46),(new sc_Pair((29),(new sc_Pair("err",null)))))))), "err", "err", "err", (new sc_Pair("=",(new sc_Pair((34),(new sc_Pair("err",(new sc_Pair((30),null)))))))), (new sc_Pair("=",(new sc_Pair((39),(new sc_Pair("err",(new sc_Pair((31),null)))))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((104),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((105),(new sc_Pair((32),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((97),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((111),(new sc_Pair((new sc_Pair("=",(new sc_Pair((101),(new sc_Pair((33),(new sc_Pair((1),null)))))))),(new sc_Pair((new sc_Pair((112),(new sc_Pair((34),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((98),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((35),null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((2),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((104),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((105),(new sc_Pair((36),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((97),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((116),(new sc_Pair((new sc_Pair("=",(new sc_Pair((110),(new sc_Pair((38),(new sc_Pair((1),null)))))))),(new sc_Pair((new sc_Pair((117),(new sc_Pair((37),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((111),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((112),(new sc_Pair((39),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((97),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((111),(new sc_Pair((new sc_Pair((98),(new sc_Pair((40),(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((112),(new sc_Pair((39),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((111),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((112),(new sc_Pair((41),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((97),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((117),(new sc_Pair((new sc_Pair("=",(new sc_Pair((111),(new sc_Pair((41),(new sc_Pair((1),null)))))))),(new sc_Pair((new sc_Pair((118),(new sc_Pair((42),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((110),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((111),(new sc_Pair((43),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((97),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((114),(new sc_Pair((new sc_Pair("=",(new sc_Pair((104),(new sc_Pair((45),(new sc_Pair((1),null)))))))),(new sc_Pair((new sc_Pair((115),(new sc_Pair((44),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((102),(new sc_Pair((new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((116),(new sc_Pair((new sc_Pair((103),(new sc_Pair((48),(new sc_Pair((new sc_Pair((115),(new sc_Pair((1),(new sc_Pair((47),null)))))),null)))))),(new sc_Pair((new sc_Pair((117),(new sc_Pair((46),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((103),(new sc_Pair((new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((102),(new sc_Pair((1),(new sc_Pair((49),null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((115),(new sc_Pair((new sc_Pair((111),(new sc_Pair((new sc_Pair((110),(new sc_Pair((1),(new sc_Pair((38),null)))))),(new sc_Pair((new sc_Pair((114),(new sc_Pair((1),(new sc_Pair((50),null)))))),null)))))),(new sc_Pair((new sc_Pair((117),(new sc_Pair((new sc_Pair((116),(new sc_Pair((1),(new sc_Pair((37),null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((105),(new sc_Pair((new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((109),(new sc_Pair((new sc_Pair((106),(new sc_Pair((53),(new sc_Pair((new sc_Pair((108),(new sc_Pair((1),(new sc_Pair((51),null)))))),null)))))),(new sc_Pair((new sc_Pair((119),(new sc_Pair((new sc_Pair((118),(new sc_Pair((1),(new sc_Pair((52),null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((97),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((115),(new sc_Pair((new sc_Pair("=",(new sc_Pair((110),(new sc_Pair((55),(new sc_Pair((1),null)))))))),(new sc_Pair((new sc_Pair((116),(new sc_Pair((54),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((97),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((111),(new sc_Pair((new sc_Pair("=",(new sc_Pair((101),(new sc_Pair((56),(new sc_Pair((1),null)))))))),(new sc_Pair((new sc_Pair((112),(new sc_Pair((57),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((97),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((111),(new sc_Pair((new sc_Pair("=",(new sc_Pair((101),(new sc_Pair((56),(new sc_Pair((1),null)))))))),(new sc_Pair((new sc_Pair((112),(new sc_Pair((58),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((27),(new sc_Pair("err",null)))))),null)))))), (new sc_Pair((11),(new sc_Pair((new sc_Pair((10),(new sc_Pair("err",(new sc_Pair((28),null)))))),(new sc_Pair((new sc_Pair("=",(new sc_Pair((32),(new sc_Pair((28),(new sc_Pair("err",null)))))))),null)))))), (new sc_Pair("=",(new sc_Pair((46),(new sc_Pair((59),(new sc_Pair("err",null)))))))), (new sc_Pair("=",(new sc_Pair((34),(new sc_Pair((60),(new sc_Pair("err",null)))))))), (new sc_Pair("=",(new sc_Pair((39),(new sc_Pair((61),(new sc_Pair("err",null)))))))), (new sc_Pair((97),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((101),(new sc_Pair((new sc_Pair((98),(new sc_Pair((63),(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((102),(new sc_Pair((62),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((99),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((100),(new sc_Pair((64),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((101),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((102),(new sc_Pair((65),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((97),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((118),(new sc_Pair((new sc_Pair("=",(new sc_Pair((115),(new sc_Pair((67),(new sc_Pair((1),null)))))))),(new sc_Pair((new sc_Pair((119),(new sc_Pair((66),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((101),(new sc_Pair((new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((98),(new sc_Pair((70),(new sc_Pair((1),null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((106),(new sc_Pair((new sc_Pair((102),(new sc_Pair((69),(new sc_Pair((new sc_Pair((105),(new sc_Pair((1),(new sc_Pair((68),null)))))),null)))))),(new sc_Pair((new sc_Pair((112),(new sc_Pair((new sc_Pair((111),(new sc_Pair((1),(new sc_Pair((71),null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((104),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((105),(new sc_Pair((72),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((97),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((108),(new sc_Pair((new sc_Pair("=",(new sc_Pair((101),(new sc_Pair((74),(new sc_Pair((1),null)))))))),(new sc_Pair((new sc_Pair((109),(new sc_Pair((73),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((114),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((115),(new sc_Pair((75),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((108),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((109),(new sc_Pair((76),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((109),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((110),(new sc_Pair((77),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((99),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((100),(new sc_Pair((78),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((117),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((118),(new sc_Pair((79),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((97),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((101),(new sc_Pair((new sc_Pair((98),(new sc_Pair((80),(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((102),(new sc_Pair((81),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((115),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((116),(new sc_Pair((82),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((101),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((102),(new sc_Pair((83),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((116),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((117),(new sc_Pair((84),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((100),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((101),(new sc_Pair((85),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((105),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((106),(new sc_Pair((86),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((97),(new sc_Pair((new sc_Pair((48),(new sc_Pair((new sc_Pair("=",(new sc_Pair((32),(new sc_Pair((88),(new sc_Pair("err",null)))))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((115),(new sc_Pair((new sc_Pair((111),(new sc_Pair((new sc_Pair((110),(new sc_Pair((1),(new sc_Pair((87),null)))))),(new sc_Pair((new sc_Pair((114),(new sc_Pair((1),(new sc_Pair((89),null)))))),null)))))),(new sc_Pair((new sc_Pair((117),(new sc_Pair((new sc_Pair((116),(new sc_Pair((1),(new sc_Pair((90),null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((48),(new sc_Pair((new sc_Pair("=",(new sc_Pair((32),(new sc_Pair((88),(new sc_Pair("err",null)))))))),(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((111),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((new sc_Pair((110),(new sc_Pair((1),(new sc_Pair((87),null)))))),null)))))),(new sc_Pair((new sc_Pair((117),(new sc_Pair((new sc_Pair((116),(new sc_Pair((1),(new sc_Pair((91),null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), "err", "err", "err", (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((114),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((115),(new sc_Pair((92),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((116),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((117),(new sc_Pair((93),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((108),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((109),(new sc_Pair((94),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((115),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((116),(new sc_Pair((95),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((101),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((102),(new sc_Pair((96),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((99),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((100),(new sc_Pair((97),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((110),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((111),(new sc_Pair((98),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((116),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((117),(new sc_Pair((99),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((101),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((102),(new sc_Pair((100),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((121),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((122),(new sc_Pair((101),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((115),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((116),(new sc_Pair((102),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((101),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((102),(new sc_Pair((103),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((104),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((105),(new sc_Pair((104),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((101),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((102),(new sc_Pair((105),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((97),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((116),(new sc_Pair((new sc_Pair("=",(new sc_Pair((110),(new sc_Pair((106),(new sc_Pair((1),null)))))))),(new sc_Pair((new sc_Pair((117),(new sc_Pair((93),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((97),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((114),(new sc_Pair((new sc_Pair("=",(new sc_Pair((110),(new sc_Pair((107),(new sc_Pair((1),null)))))))),(new sc_Pair((new sc_Pair((115),(new sc_Pair((92),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((101),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((102),(new sc_Pair((108),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((114),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((115),(new sc_Pair((109),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((104),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((105),(new sc_Pair((110),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((116),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((117),(new sc_Pair((111),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((101),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((102),(new sc_Pair((112),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair("=",(new sc_Pair((111),(new sc_Pair((113),(new sc_Pair("err",null)))))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((104),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((105),(new sc_Pair((114),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((97),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((104),(new sc_Pair((new sc_Pair("=",(new sc_Pair((101),(new sc_Pair((115),(new sc_Pair((1),null)))))))),(new sc_Pair((new sc_Pair((105),(new sc_Pair((114),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((101),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((102),(new sc_Pair((116),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((98),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((117),null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((104),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((105),(new sc_Pair((118),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((114),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((115),(new sc_Pair((119),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((101),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((102),(new sc_Pair((120),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((97),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((116),(new sc_Pair((new sc_Pair("=",(new sc_Pair((111),(new sc_Pair((121),(new sc_Pair((1),null)))))))),(new sc_Pair((new sc_Pair((117),(new sc_Pair((122),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((121),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((122),(new sc_Pair((123),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((101),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((102),(new sc_Pair((124),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((104),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((105),(new sc_Pair((125),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair("=",(new sc_Pair((110),(new sc_Pair((126),(new sc_Pair("err",null)))))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((105),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((106),(new sc_Pair((127),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((59),(new sc_Pair((128),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((114),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((115),(new sc_Pair((129),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((115),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((116),(new sc_Pair((130),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((110),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((111),(new sc_Pair((131),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((104),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((105),(new sc_Pair((132),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((97),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair((116),(new sc_Pair((new sc_Pair("=",(new sc_Pair((111),(new sc_Pair((133),(new sc_Pair((1),null)))))))),(new sc_Pair((new sc_Pair((117),(new sc_Pair((134),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((114),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((115),(new sc_Pair((135),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((101),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((102),(new sc_Pair((136),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair("=",(new sc_Pair((101),(new sc_Pair((137),(new sc_Pair("err",null)))))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((110),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((111),(new sc_Pair((138),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair("=",(new sc_Pair((46),(new sc_Pair((139),(new sc_Pair((128),null)))))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((101),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((102),(new sc_Pair((140),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((101),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((102),(new sc_Pair((141),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((105),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((106),(new sc_Pair((142),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((110),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((111),(new sc_Pair((143),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((104),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((105),(new sc_Pair((144),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((114),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((115),(new sc_Pair((145),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), "err", (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((103),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((104),(new sc_Pair((146),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), "err", (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((110),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((111),(new sc_Pair((147),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((101),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((102),(new sc_Pair((148),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((105),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((106),(new sc_Pair((149),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((103),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((104),(new sc_Pair((150),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((110),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((111),(new sc_Pair((151),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))), (new sc_Pair((91),(new sc_Pair((new sc_Pair((58),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((65),(new sc_Pair("err",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair((103),(new sc_Pair((new sc_Pair((97),(new sc_Pair("err",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair((104),(new sc_Pair((152),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null)))))),null)))))), (new sc_Pair((65),(new sc_Pair((new sc_Pair((48),(new sc_Pair("err",(new sc_Pair((new sc_Pair((58),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),(new sc_Pair((new sc_Pair((97),(new sc_Pair((new sc_Pair((91),(new sc_Pair((1),(new sc_Pair("err",null)))))),(new sc_Pair((new sc_Pair((123),(new sc_Pair((1),(new sc_Pair("err",null)))))),null)))))),null))))))]);
  (const_clce_l = [(new sc_Pair(false,false)), (new sc_Pair((57),(57))), (new sc_Pair((56),(56))), (new sc_Pair((55),(55))), (new sc_Pair((54),(54))), (new sc_Pair((52),(52))), (new sc_Pair((51),(51))), (new sc_Pair((50),(50))), (new sc_Pair(false,false)), (new sc_Pair(false,false)), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((56),(56))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((11),(11))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((11),(11))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((1),(1))), (new sc_Pair((0),(0))), (new sc_Pair(false,false)), (new sc_Pair(false,false)), (new sc_Pair(false,false)), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((12),(12))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((45),(45))), (new sc_Pair((27),(27))), (new sc_Pair((9),(9))), (new sc_Pair((38),(38))), (new sc_Pair((6),(6))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((40),(40))), (new sc_Pair((12),(12))), (new sc_Pair((57),(57))), (new sc_Pair((20),(20))), (new sc_Pair((20),(20))), (new sc_Pair((53),(53))), (new sc_Pair((49),(49))), (new sc_Pair((48),(48))), (new sc_Pair((32),(32))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((28),(28))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((23),(23))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((22),(22))), (new sc_Pair((16),(16))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((32),(32))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((4),(4))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair(false,false)), (new sc_Pair((8),(8))), (new sc_Pair((3),(3))), (new sc_Pair((3),(3))), (new sc_Pair((57),(57))), (new sc_Pair((31),(31))), (new sc_Pair((57),(57))), (new sc_Pair((30),(30))), (new sc_Pair((29),(29))), (new sc_Pair((57),(57))), (new sc_Pair((25),(25))), (new sc_Pair((24),(24))), (new sc_Pair((57),(57))), (new sc_Pair((43),(43))), (new sc_Pair((57),(57))), (new sc_Pair((13),(13))), (new sc_Pair((42),(42))), (new sc_Pair((46),(46))), (new sc_Pair((39),(39))), (new sc_Pair((10),(10))), (new sc_Pair((37),(37))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((34),(34))), (new sc_Pair(false,false)), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((41),(41))), (new sc_Pair((57),(57))), (new sc_Pair((26),(26))), (new sc_Pair((57),(57))), (new sc_Pair((44),(44))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((17),(17))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair(false,false)), (new sc_Pair((57),(57))), (new sc_Pair(false,false)), (new sc_Pair((57),(57))), (new sc_Pair((35),(35))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((5),(5))), (new sc_Pair((57),(57))), (new sc_Pair((33),(33))), (new sc_Pair((57),(57))), (new sc_Pair((2),(2))), (new sc_Pair((47),(47))), (new sc_Pair((15),(15))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((57),(57))), (new sc_Pair((7),(7))), (new sc_Pair((21),(21))), (new sc_Pair((57),(57))), (new sc_Pair((19),(19))), (new sc_Pair((57),(57))), (new sc_Pair((14),(14))), (new sc_Pair((57),(57))), (new sc_Pair((18),(18)))]);
  (BgL_lexerzd2initzd2bufferzd2lenzd2 = (1024));
  (BgL_lexerzd2integerzd2newlinez00 = ((new sc_Char("\n")).val.charCodeAt(0)));
  BgL_lexerzd2rawzd2ISzd2makerzd2 = function(buffer, BgL_sc_readzd2ptr_44zd2, BgL_sc_inputzd2f_46zd2, counters) {
    var BgL_sc_startzd2gozd2tozd2endzd2none_8z00;
    var BgL_sc_startzd2gozd2tozd2endzd2line_9z00;
    var BgL_sc_startzd2gozd2tozd2endzd2all_10z00;
    var BgL_sc_endzd2gozd2tozd2point_11zd2;
    var BgL_sc_initzd2lexemezd2none_12z00;
    var BgL_sc_initzd2lexemezd2line_13z00;
    var BgL_sc_initzd2lexemezd2all_14z00;
    var BgL_sc_getzd2startzd2line_15z00;
    var BgL_sc_getzd2startzd2column_16z00;
    var BgL_sc_getzd2startzd2offset_17z00;
    var BgL_sc_peekzd2leftzd2context_18z00;
    var BgL_sc_peekzd2char_19zd2;
    var BgL_sc_readzd2char_20zd2;
    var BgL_sc_getzd2startzd2endzd2text_21zd2;
    var BgL_sc_getzd2userzd2linezd2line_22zd2;
    var BgL_sc_getzd2userzd2linezd2all_23zd2;
    var BgL_sc_getzd2userzd2columnzd2all_24zd2;
    var BgL_sc_getzd2userzd2offsetzd2all_25zd2;
    var BgL_sc_userzd2getczd2none_26z00;
    var BgL_sc_userzd2getczd2line_27z00;
    var BgL_sc_userzd2getczd2all_28z00;
    var BgL_sc_userzd2ungetczd2none_29z00;
    var BgL_sc_userzd2ungetczd2line_30z00;
    var BgL_sc_userzd2ungetczd2all_31z00;
    var BgL_sc_reorganiza7ezd2buffer_32z75;
    var BgL_sc_userzd2upzd2tozd2datezf3_33z21;
    var BgL_sc_userzd2offset_34zd2;
    var BgL_sc_userzd2column_35zd2;
    var BgL_sc_userzd2line_36zd2;
    var BgL_sc_userzd2ptr_37zd2;
    var BgL_sc_pointzd2ptr_38zd2;
    var BgL_sc_endzd2ptr_39zd2;
    var BgL_sc_startzd2offset_40zd2;
    var BgL_sc_startzd2column_41zd2;
    var BgL_sc_startzd2line_42zd2;
    var BgL_sc_startzd2ptr_43zd2;
    var BgL_sc_readzd2ptr_44zd2;
    var buflen;
    var sc_buffer_45;
    var BgL_sc_inputzd2f_46zd2;
    return ((sc_buffer_45 = buffer), (buflen = ((0,sc_stringLength_mutable)(buffer))), (BgL_sc_startzd2ptr_43zd2 = (1)), (BgL_sc_startzd2line_42zd2 = (1)), (BgL_sc_startzd2column_41zd2 = (1)), (BgL_sc_startzd2offset_40zd2 = (0)), (BgL_sc_endzd2ptr_39zd2 = (1)), (BgL_sc_pointzd2ptr_38zd2 = (1)), (BgL_sc_userzd2ptr_37zd2 = (1)), (BgL_sc_userzd2line_36zd2 = (1)), (BgL_sc_userzd2column_35zd2 = (1)), (BgL_sc_userzd2offset_34zd2 = (0)), (BgL_sc_userzd2upzd2tozd2datezf3_33z21 = true), (BgL_sc_startzd2gozd2tozd2endzd2none_8z00 = function() {
      return (BgL_sc_startzd2ptr_43zd2 = BgL_sc_endzd2ptr_39zd2);
    }), (BgL_sc_startzd2gozd2tozd2endzd2line_9z00 = function() {
      var ptr;
      var line;
      {
        (ptr = BgL_sc_startzd2ptr_43zd2);
        (line = BgL_sc_startzd2line_42zd2);
        while (!(ptr===BgL_sc_endzd2ptr_39zd2)) {
          if ((((0,sc_stringRef_mutable)(sc_buffer_45, ptr)).val === (new sc_Char("\n")).val))
            {
              (ptr = (ptr+(1)));
              (line = (line+(1)));
            }
          else
            (ptr = (ptr+(1)));
        }
        (BgL_sc_startzd2ptr_43zd2 = ptr);
        (BgL_sc_startzd2line_42zd2 = line);
      }
    }), (BgL_sc_startzd2gozd2tozd2endzd2all_10z00 = function() {
      var ptr;
      var line;
      var column;
      {
        (BgL_sc_startzd2offset_40zd2 = (BgL_sc_startzd2offset_40zd2+(BgL_sc_endzd2ptr_39zd2-BgL_sc_startzd2ptr_43zd2)));
        (ptr = BgL_sc_startzd2ptr_43zd2);
        (line = BgL_sc_startzd2line_42zd2);
        (column = BgL_sc_startzd2column_41zd2);
        while (!(ptr===BgL_sc_endzd2ptr_39zd2)) {
          if ((((0,sc_stringRef_mutable)(sc_buffer_45, ptr)).val === (new sc_Char("\n")).val))
            {
              (ptr = (ptr+(1)));
              (line = (line+(1)));
              (column = (1));
            }
          else
            {
              (ptr = (ptr+(1)));
              (column = (column+(1)));
            }
        }
        (BgL_sc_startzd2ptr_43zd2 = ptr);
        (BgL_sc_startzd2line_42zd2 = line);
        (BgL_sc_startzd2column_41zd2 = column);
      }
    }), (BgL_sc_endzd2gozd2tozd2point_11zd2 = function() {
      return (BgL_sc_endzd2ptr_39zd2 = BgL_sc_pointzd2ptr_38zd2);
    }), (BgL_sc_initzd2lexemezd2none_12z00 = function() {
      return (((BgL_sc_startzd2ptr_43zd2<BgL_sc_userzd2ptr_37zd2)?(BgL_sc_startzd2ptr_43zd2 = BgL_sc_userzd2ptr_37zd2):undefined), (BgL_sc_pointzd2ptr_38zd2 = BgL_sc_startzd2ptr_43zd2));
    }), (BgL_sc_initzd2lexemezd2line_13z00 = function() {
      return (((BgL_sc_startzd2ptr_43zd2<BgL_sc_userzd2ptr_37zd2)?((BgL_sc_startzd2ptr_43zd2 = BgL_sc_userzd2ptr_37zd2), (BgL_sc_startzd2line_42zd2 = BgL_sc_userzd2line_36zd2)):undefined), (BgL_sc_pointzd2ptr_38zd2 = BgL_sc_startzd2ptr_43zd2));
    }), (BgL_sc_initzd2lexemezd2all_14z00 = function() {
      var ptr;
      var column;
      {
        if ((BgL_sc_startzd2ptr_43zd2<BgL_sc_userzd2ptr_37zd2))
          {
            (BgL_sc_startzd2line_42zd2 = BgL_sc_userzd2line_36zd2);
            (BgL_sc_startzd2offset_40zd2 = BgL_sc_userzd2offset_34zd2);
            if ((BgL_sc_userzd2upzd2tozd2datezf3_33z21!== false))
              {
                (BgL_sc_startzd2ptr_43zd2 = BgL_sc_userzd2ptr_37zd2);
                (BgL_sc_startzd2column_41zd2 = BgL_sc_userzd2column_35zd2);
              }
            else
              {
                (ptr = BgL_sc_startzd2ptr_43zd2);
                (column = BgL_sc_startzd2column_41zd2);
                while (!(ptr===BgL_sc_userzd2ptr_37zd2)) {
                  if ((((0,sc_stringRef_mutable)(sc_buffer_45, ptr)).val === (new sc_Char("\n")).val))
                    {
                      (ptr = (ptr+(1)));
                      (column = (1));
                    }
                  else
                    {
                      (ptr = (ptr+(1)));
                      (column = (column+(1)));
                    }
                }
                (BgL_sc_startzd2ptr_43zd2 = ptr);
                (BgL_sc_startzd2column_41zd2 = column);
              }
          }
        (BgL_sc_pointzd2ptr_38zd2 = BgL_sc_startzd2ptr_43zd2);
      }
    }), (BgL_sc_getzd2startzd2line_15z00 = function() {
      return BgL_sc_startzd2line_42zd2;
    }), (BgL_sc_getzd2startzd2column_16z00 = function() {
      return BgL_sc_startzd2column_41zd2;
    }), (BgL_sc_getzd2startzd2offset_17z00 = function() {
      return BgL_sc_startzd2offset_40zd2;
    }), (BgL_sc_peekzd2leftzd2context_18z00 = function() {
      return (((0,sc_stringRef_mutable)(sc_buffer_45, (BgL_sc_startzd2ptr_43zd2-(1)))).val.charCodeAt(0));
    }), (BgL_sc_peekzd2char_19zd2 = function() {
      var c;
      return ((BgL_sc_pointzd2ptr_38zd2<BgL_sc_readzd2ptr_44zd2)?(((0,sc_stringRef_mutable)(sc_buffer_45, BgL_sc_pointzd2ptr_38zd2)).val.charCodeAt(0)):((c = ((0,BgL_sc_inputzd2f_46zd2)())), ((c instanceof sc_Char)?(((BgL_sc_readzd2ptr_44zd2===buflen)?((0,BgL_sc_reorganiza7ezd2buffer_32z75)()):undefined), ((0,sc_stringSet_mutable)(sc_buffer_45, BgL_sc_pointzd2ptr_38zd2, c)), (BgL_sc_readzd2ptr_44zd2 = (BgL_sc_pointzd2ptr_38zd2+(1))), (c.val.charCodeAt(0))):((BgL_sc_inputzd2f_46zd2 = function() {
        return "eof";
      }), false))));
    }), (BgL_sc_readzd2char_20zd2 = function() {
      var c;
      var sc_c_47;
      return ((BgL_sc_pointzd2ptr_38zd2<BgL_sc_readzd2ptr_44zd2)?((sc_c_47 = ((0,sc_stringRef_mutable)(sc_buffer_45, BgL_sc_pointzd2ptr_38zd2))), (BgL_sc_pointzd2ptr_38zd2 = (BgL_sc_pointzd2ptr_38zd2+(1))), (sc_c_47.val.charCodeAt(0))):((c = ((0,BgL_sc_inputzd2f_46zd2)())), ((c instanceof sc_Char)?(((BgL_sc_readzd2ptr_44zd2===buflen)?((0,BgL_sc_reorganiza7ezd2buffer_32z75)()):undefined), ((0,sc_stringSet_mutable)(sc_buffer_45, BgL_sc_pointzd2ptr_38zd2, c)), (BgL_sc_readzd2ptr_44zd2 = (BgL_sc_pointzd2ptr_38zd2+(1))), (BgL_sc_pointzd2ptr_38zd2 = BgL_sc_readzd2ptr_44zd2), (c.val.charCodeAt(0))):((BgL_sc_inputzd2f_46zd2 = function() {
        return "eof";
      }), false))));
    }), (BgL_sc_getzd2startzd2endzd2text_21zd2 = function() {
      return (new sc_String(sc_buffer_45.val.substring(BgL_sc_startzd2ptr_43zd2, BgL_sc_endzd2ptr_39zd2)));
    }), (BgL_sc_getzd2userzd2linezd2line_22zd2 = function() {
      return (((BgL_sc_userzd2ptr_37zd2<BgL_sc_startzd2ptr_43zd2)?((BgL_sc_userzd2ptr_37zd2 = BgL_sc_startzd2ptr_43zd2), (BgL_sc_userzd2line_36zd2 = BgL_sc_startzd2line_42zd2)):undefined), BgL_sc_userzd2line_36zd2);
    }), (BgL_sc_getzd2userzd2linezd2all_23zd2 = function() {
      return (((BgL_sc_userzd2ptr_37zd2<BgL_sc_startzd2ptr_43zd2)?((BgL_sc_userzd2ptr_37zd2 = BgL_sc_startzd2ptr_43zd2), (BgL_sc_userzd2line_36zd2 = BgL_sc_startzd2line_42zd2), (BgL_sc_userzd2column_35zd2 = BgL_sc_startzd2column_41zd2), (BgL_sc_userzd2offset_34zd2 = BgL_sc_startzd2offset_40zd2), (BgL_sc_userzd2upzd2tozd2datezf3_33z21 = true)):undefined), BgL_sc_userzd2line_36zd2);
    }), (BgL_sc_getzd2userzd2columnzd2all_24zd2 = function() {
      var ptr;
      var column;
      if ((BgL_sc_userzd2ptr_37zd2<BgL_sc_startzd2ptr_43zd2))
        {
          (BgL_sc_userzd2ptr_37zd2 = BgL_sc_startzd2ptr_43zd2);
          (BgL_sc_userzd2line_36zd2 = BgL_sc_startzd2line_42zd2);
          (BgL_sc_userzd2column_35zd2 = BgL_sc_startzd2column_41zd2);
          (BgL_sc_userzd2offset_34zd2 = BgL_sc_startzd2offset_40zd2);
          (BgL_sc_userzd2upzd2tozd2datezf3_33z21 = true);
          return BgL_sc_userzd2column_35zd2;
        }
      else
        if ((BgL_sc_userzd2upzd2tozd2datezf3_33z21!== false))
          return BgL_sc_userzd2column_35zd2;
        else
          {
            (ptr = BgL_sc_startzd2ptr_43zd2);
            (column = BgL_sc_startzd2column_41zd2);
            while (!(ptr===BgL_sc_userzd2ptr_37zd2)) {
              if ((((0,sc_stringRef_mutable)(sc_buffer_45, ptr)).val === (new sc_Char("\n")).val))
                {
                  (ptr = (ptr+(1)));
                  (column = (1));
                }
              else
                {
                  (ptr = (ptr+(1)));
                  (column = (column+(1)));
                }
            }
            (BgL_sc_userzd2column_35zd2 = column);
            (BgL_sc_userzd2upzd2tozd2datezf3_33z21 = true);
            return column;
          }
    }), (BgL_sc_getzd2userzd2offsetzd2all_25zd2 = function() {
      return (((BgL_sc_userzd2ptr_37zd2<BgL_sc_startzd2ptr_43zd2)?((BgL_sc_userzd2ptr_37zd2 = BgL_sc_startzd2ptr_43zd2), (BgL_sc_userzd2line_36zd2 = BgL_sc_startzd2line_42zd2), (BgL_sc_userzd2column_35zd2 = BgL_sc_startzd2column_41zd2), (BgL_sc_userzd2offset_34zd2 = BgL_sc_startzd2offset_40zd2), (BgL_sc_userzd2upzd2tozd2datezf3_33z21 = true)):undefined), BgL_sc_userzd2offset_34zd2);
    }), (BgL_sc_userzd2getczd2none_26z00 = function() {
      var c;
      var sc_c_48;
      return (((BgL_sc_userzd2ptr_37zd2<BgL_sc_startzd2ptr_43zd2)?(BgL_sc_userzd2ptr_37zd2 = BgL_sc_startzd2ptr_43zd2):undefined), ((BgL_sc_userzd2ptr_37zd2<BgL_sc_readzd2ptr_44zd2)?((sc_c_48 = ((0,sc_stringRef_mutable)(sc_buffer_45, BgL_sc_userzd2ptr_37zd2))), (BgL_sc_userzd2ptr_37zd2 = (BgL_sc_userzd2ptr_37zd2+(1))), sc_c_48):((c = ((0,BgL_sc_inputzd2f_46zd2)())), ((c instanceof sc_Char)?(((BgL_sc_readzd2ptr_44zd2===buflen)?((0,BgL_sc_reorganiza7ezd2buffer_32z75)()):undefined), ((0,sc_stringSet_mutable)(sc_buffer_45, BgL_sc_userzd2ptr_37zd2, c)), (BgL_sc_readzd2ptr_44zd2 = (BgL_sc_readzd2ptr_44zd2+(1))), (BgL_sc_userzd2ptr_37zd2 = BgL_sc_readzd2ptr_44zd2), c):((BgL_sc_inputzd2f_46zd2 = function() {
        return "eof";
      }), "eof")))));
    }), (BgL_sc_userzd2getczd2line_27z00 = function() {
      var c;
      var sc_c_49;
      return (((BgL_sc_userzd2ptr_37zd2<BgL_sc_startzd2ptr_43zd2)?((BgL_sc_userzd2ptr_37zd2 = BgL_sc_startzd2ptr_43zd2), (BgL_sc_userzd2line_36zd2 = BgL_sc_startzd2line_42zd2)):undefined), ((BgL_sc_userzd2ptr_37zd2<BgL_sc_readzd2ptr_44zd2)?((sc_c_49 = ((0,sc_stringRef_mutable)(sc_buffer_45, BgL_sc_userzd2ptr_37zd2))), (BgL_sc_userzd2ptr_37zd2 = (BgL_sc_userzd2ptr_37zd2+(1))), ((sc_c_49.val === (new sc_Char("\n")).val)?(BgL_sc_userzd2line_36zd2 = (BgL_sc_userzd2line_36zd2+(1))):undefined), sc_c_49):((c = ((0,BgL_sc_inputzd2f_46zd2)())), ((c instanceof sc_Char)?(((BgL_sc_readzd2ptr_44zd2===buflen)?((0,BgL_sc_reorganiza7ezd2buffer_32z75)()):undefined), ((0,sc_stringSet_mutable)(sc_buffer_45, BgL_sc_userzd2ptr_37zd2, c)), (BgL_sc_readzd2ptr_44zd2 = (BgL_sc_readzd2ptr_44zd2+(1))), (BgL_sc_userzd2ptr_37zd2 = BgL_sc_readzd2ptr_44zd2), ((c.val === (new sc_Char("\n")).val)?(BgL_sc_userzd2line_36zd2 = (BgL_sc_userzd2line_36zd2+(1))):undefined), c):((BgL_sc_inputzd2f_46zd2 = function() {
        return "eof";
      }), "eof")))));
    }), (BgL_sc_userzd2getczd2all_28z00 = function() {
      var c;
      var sc_c_50;
      return (((BgL_sc_userzd2ptr_37zd2<BgL_sc_startzd2ptr_43zd2)?((BgL_sc_userzd2ptr_37zd2 = BgL_sc_startzd2ptr_43zd2), (BgL_sc_userzd2line_36zd2 = BgL_sc_startzd2line_42zd2), (BgL_sc_userzd2column_35zd2 = BgL_sc_startzd2column_41zd2), (BgL_sc_userzd2offset_34zd2 = BgL_sc_startzd2offset_40zd2), (BgL_sc_userzd2upzd2tozd2datezf3_33z21 = true)):undefined), ((BgL_sc_userzd2ptr_37zd2<BgL_sc_readzd2ptr_44zd2)?((sc_c_50 = ((0,sc_stringRef_mutable)(sc_buffer_45, BgL_sc_userzd2ptr_37zd2))), (BgL_sc_userzd2ptr_37zd2 = (BgL_sc_userzd2ptr_37zd2+(1))), ((sc_c_50.val === (new sc_Char("\n")).val)?((BgL_sc_userzd2line_36zd2 = (BgL_sc_userzd2line_36zd2+(1))), (BgL_sc_userzd2column_35zd2 = (1))):(BgL_sc_userzd2column_35zd2 = (BgL_sc_userzd2column_35zd2+(1)))), (BgL_sc_userzd2offset_34zd2 = (BgL_sc_userzd2offset_34zd2+(1))), sc_c_50):((c = ((0,BgL_sc_inputzd2f_46zd2)())), ((c instanceof sc_Char)?(((BgL_sc_readzd2ptr_44zd2===buflen)?((0,BgL_sc_reorganiza7ezd2buffer_32z75)()):undefined), ((0,sc_stringSet_mutable)(sc_buffer_45, BgL_sc_userzd2ptr_37zd2, c)), (BgL_sc_readzd2ptr_44zd2 = (BgL_sc_readzd2ptr_44zd2+(1))), (BgL_sc_userzd2ptr_37zd2 = BgL_sc_readzd2ptr_44zd2), ((c.val === (new sc_Char("\n")).val)?((BgL_sc_userzd2line_36zd2 = (BgL_sc_userzd2line_36zd2+(1))), (BgL_sc_userzd2column_35zd2 = (1))):(BgL_sc_userzd2column_35zd2 = (BgL_sc_userzd2column_35zd2+(1)))), (BgL_sc_userzd2offset_34zd2 = (BgL_sc_userzd2offset_34zd2+(1))), c):((BgL_sc_inputzd2f_46zd2 = function() {
        return "eof";
      }), "eof")))));
    }), (BgL_sc_userzd2ungetczd2none_29z00 = function() {
      return ((BgL_sc_userzd2ptr_37zd2>BgL_sc_startzd2ptr_43zd2)?(BgL_sc_userzd2ptr_37zd2 = (BgL_sc_userzd2ptr_37zd2-(1))):undefined);
    }), (BgL_sc_userzd2ungetczd2line_30z00 = function() {
      var c;
      return ((BgL_sc_userzd2ptr_37zd2>BgL_sc_startzd2ptr_43zd2)?((BgL_sc_userzd2ptr_37zd2 = (BgL_sc_userzd2ptr_37zd2-(1))), (c = ((0,sc_stringRef_mutable)(sc_buffer_45, BgL_sc_userzd2ptr_37zd2))), ((c.val === (new sc_Char("\n")).val)?(BgL_sc_userzd2line_36zd2 = (BgL_sc_userzd2line_36zd2-(1))):undefined)):undefined);
    }), (BgL_sc_userzd2ungetczd2all_31z00 = function() {
      var c;
      return ((BgL_sc_userzd2ptr_37zd2>BgL_sc_startzd2ptr_43zd2)?((BgL_sc_userzd2ptr_37zd2 = (BgL_sc_userzd2ptr_37zd2-(1))), (c = ((0,sc_stringRef_mutable)(sc_buffer_45, BgL_sc_userzd2ptr_37zd2))), ((c.val === (new sc_Char("\n")).val)?((BgL_sc_userzd2line_36zd2 = (BgL_sc_userzd2line_36zd2-(1))), (BgL_sc_userzd2upzd2tozd2datezf3_33z21 = false)):(BgL_sc_userzd2column_35zd2 = (BgL_sc_userzd2column_35zd2-(1)))), (BgL_sc_userzd2offset_34zd2 = (BgL_sc_userzd2offset_34zd2-(1)))):undefined);
    }), (BgL_sc_reorganiza7ezd2buffer_32z75 = function() {
      var from;
      var sc_from_51;
      var delta;
      var sc_delta_52;
      var newbuf;
      var newlen;
      if ((((2)*BgL_sc_startzd2ptr_43zd2)<buflen))
        {
          (newlen = ((2)*buflen));
          (newbuf = ((0,sc_makeString_mutable)(newlen)));
          (sc_delta_52 = (BgL_sc_startzd2ptr_43zd2-(1)));
          (sc_from_51 = (BgL_sc_startzd2ptr_43zd2-(1)));
          while ((sc_from_51<buflen)) {
            {
              ((0,sc_stringSet_mutable)(newbuf, (sc_from_51-sc_delta_52), ((0,sc_stringRef_mutable)(sc_buffer_45, sc_from_51))));
              (sc_from_51 = (sc_from_51+(1)));
            }
          }
          (sc_buffer_45 = newbuf);
          (buflen = newlen);
          (BgL_sc_readzd2ptr_44zd2 = (BgL_sc_readzd2ptr_44zd2-sc_delta_52));
          (BgL_sc_startzd2ptr_43zd2 = (BgL_sc_startzd2ptr_43zd2-sc_delta_52));
          (BgL_sc_endzd2ptr_39zd2 = (BgL_sc_endzd2ptr_39zd2-sc_delta_52));
          (BgL_sc_pointzd2ptr_38zd2 = (BgL_sc_pointzd2ptr_38zd2-sc_delta_52));
          (BgL_sc_userzd2ptr_37zd2 = (BgL_sc_userzd2ptr_37zd2-sc_delta_52));
        }
      else
        {
          (delta = (BgL_sc_startzd2ptr_43zd2-(1)));
          (from = (BgL_sc_startzd2ptr_43zd2-(1)));
          while ((from<buflen)) {
            {
              ((0,sc_stringSet_mutable)(sc_buffer_45, (from-delta), ((0,sc_stringRef_mutable)(sc_buffer_45, from))));
              (from = (from+(1)));
            }
          }
          (BgL_sc_readzd2ptr_44zd2 = (BgL_sc_readzd2ptr_44zd2-delta));
          (BgL_sc_startzd2ptr_43zd2 = (BgL_sc_startzd2ptr_43zd2-delta));
          (BgL_sc_endzd2ptr_39zd2 = (BgL_sc_endzd2ptr_39zd2-delta));
          (BgL_sc_pointzd2ptr_38zd2 = (BgL_sc_pointzd2ptr_38zd2-delta));
          (BgL_sc_userzd2ptr_37zd2 = (BgL_sc_userzd2ptr_37zd2-delta));
        }
    }), ((0,sc_list)((new sc_Pair("start-go-to-end", ((counters==="none")?BgL_sc_startzd2gozd2tozd2endzd2none_8z00:((counters==="line")?BgL_sc_startzd2gozd2tozd2endzd2line_9z00:((counters==="all")?BgL_sc_startzd2gozd2tozd2endzd2all_10z00:false))))), (new sc_Pair("end-go-to-point", BgL_sc_endzd2gozd2tozd2point_11zd2)), (new sc_Pair("init-lexeme", ((counters==="none")?BgL_sc_initzd2lexemezd2none_12z00:((counters==="line")?BgL_sc_initzd2lexemezd2line_13z00:((counters==="all")?BgL_sc_initzd2lexemezd2all_14z00:false))))), (new sc_Pair("get-start-line", BgL_sc_getzd2startzd2line_15z00)), (new sc_Pair("get-start-column", BgL_sc_getzd2startzd2column_16z00)), (new sc_Pair("get-start-offset", BgL_sc_getzd2startzd2offset_17z00)), (new sc_Pair("peek-left-context", BgL_sc_peekzd2leftzd2context_18z00)), (new sc_Pair("peek-char", BgL_sc_peekzd2char_19zd2)), (new sc_Pair("read-char", BgL_sc_readzd2char_20zd2)), (new sc_Pair("get-start-end-text", BgL_sc_getzd2startzd2endzd2text_21zd2)), (new sc_Pair("get-user-line", ((counters==="none")?false:((counters==="line")?BgL_sc_getzd2userzd2linezd2line_22zd2:((counters==="all")?BgL_sc_getzd2userzd2linezd2all_23zd2:false))))), (new sc_Pair("get-user-column", ((counters==="none")?false:((counters==="line")?false:((counters==="all")?BgL_sc_getzd2userzd2columnzd2all_24zd2:false))))), (new sc_Pair("get-user-offset", ((counters==="none")?false:((counters==="line")?false:((counters==="all")?BgL_sc_getzd2userzd2offsetzd2all_25zd2:false))))), (new sc_Pair("user-getc", ((counters==="none")?BgL_sc_userzd2getczd2none_26z00:((counters==="line")?BgL_sc_userzd2getczd2line_27z00:((counters==="all")?BgL_sc_userzd2getczd2all_28z00:false))))), (new sc_Pair("user-ungetc", ((counters==="none")?BgL_sc_userzd2ungetczd2none_29z00:((counters==="line")?BgL_sc_userzd2ungetczd2line_30z00:((counters==="all")?BgL_sc_userzd2ungetczd2all_31z00:false))))))));
  };
  BgL_lexerzd2makezd2ISz00 = function(BgL_sc_inputzd2type_53zd2, input) {
    var largs = null;
    for (var sc_tmp = arguments.length - 1; sc_tmp >= 2; sc_tmp--) {
      largs = sc_cons(arguments[sc_tmp], largs);
    }
    var BgL_sc_inputzd2f_54zd2;
    var buffer;
    var BgL_sc_inputzd2f_55zd2;
    var BgL_sc_readzd2ptr_56zd2;
    var sc_buffer_57;
    var sc_buffer_58;
    var BgL_sc_inputzd2f_59zd2;
    var sc_buffer_60;
    var BgL_sc_counterszd2type_61zd2;
    return ((BgL_sc_counterszd2type_61zd2 = ((largs === null)?"line":((((0,sc_memq)((largs.car), sc_const_7_clce_l))!== false)?(largs.car):"line"))), (((BgL_sc_inputzd2type_53zd2==="port")&&(input instanceof sc_InputPort))?((sc_buffer_60 = ((0,sc_makeString_mutable)((1024), (new sc_Char("\n"))))), (BgL_sc_inputzd2f_59zd2 = function() {
      return ((0,sc_readChar)(input));
    }), ((0,BgL_lexerzd2rawzd2ISzd2makerzd2)(sc_buffer_60, (1), BgL_sc_inputzd2f_59zd2, BgL_sc_counterszd2type_61zd2))):(((BgL_sc_inputzd2type_53zd2==="procedure")&&(typeof input === 'function'))?((sc_buffer_58 = ((0,sc_makeString_mutable)((1024), (new sc_Char("\n"))))), ((0,BgL_lexerzd2rawzd2ISzd2makerzd2)(sc_buffer_58, (1), input, BgL_sc_counterszd2type_61zd2))):(((BgL_sc_inputzd2type_53zd2==="string")&&(input instanceof sc_String))?((sc_buffer_57 = (new sc_String(((0,sc_string_mutable)((new sc_Char("\n")))).val+input.val))), (BgL_sc_readzd2ptr_56zd2 = ((0,sc_stringLength_mutable)(sc_buffer_57))), (BgL_sc_inputzd2f_55zd2 = function() {
      return "eof";
    }), ((0,BgL_lexerzd2rawzd2ISzd2makerzd2)(sc_buffer_57, BgL_sc_readzd2ptr_56zd2, BgL_sc_inputzd2f_55zd2, BgL_sc_counterszd2type_61zd2))):((buffer = ((0,sc_string_mutable)((new sc_Char("\n"))))), (BgL_sc_inputzd2f_54zd2 = function() {
      return "eof";
    }), ((0,BgL_lexerzd2rawzd2ISzd2makerzd2)(buffer, (1), BgL_sc_inputzd2f_54zd2, BgL_sc_counterszd2type_61zd2)))))));
  };
  BgL_lexerzd2getzd2funczd2getczd2 = function(IS) {
    return (((0,sc_assq)("user-getc", IS)).cdr);
  };
  BgL_lexerzd2getzd2funczd2ungetczd2 = function(IS) {
    return (((0,sc_assq)("user-ungetc", IS)).cdr);
  };
  BgL_lexerzd2getzd2funczd2linezd2 = function(IS) {
    return (((0,sc_assq)("get-user-line", IS)).cdr);
  };
  BgL_lexerzd2getzd2funczd2columnzd2 = function(IS) {
    return (((0,sc_assq)("get-user-column", IS)).cdr);
  };
  BgL_lexerzd2getzd2funczd2offsetzd2 = function(IS) {
    return (((0,sc_assq)("get-user-offset", IS)).cdr);
  };
  BgL_lexerzd2makezd2treezd2lexerzd2 = function(tables, IS) {
    var l;
    var hook;
    var result;
    var BgL_sc_transzd2func_62zd2;
    var BgL_sc_endzd2gozd2tozd2point_63zd2;
    var r1;
    var sc_hook_64;
    var sc_result_65;
    var BgL_sc_transzd2func_66zd2;
    var BgL_sc_peekzd2char_67zd2;
    var BgL_sc_endzd2gozd2tozd2point_68zd2;
    var r2;
    var sc_r1_69;
    var sc_hook_70;
    var sc_result_71;
    var BgL_sc_transzd2func_72zd2;
    var BgL_sc_endzd2gozd2tozd2point_73zd2;
    var BgL_sc_peekzd2char_74zd2;
    var sc_r1_75;
    var BgL_sc_transzd2func_76zd2;
    var sc_r2_77;
    var sc_r1_78;
    var acc;
    var storage;
    var s;
    var action;
    var sc_hook_79;
    var sc_result_80;
    var BgL_sc_startzd2gozd2tozd2end_81zd2;
    var BgL_sc_prezd2action_82zd2;
    var sc_hook_83;
    var sc_result_84;
    var BgL_sc_startzd2gozd2tozd2end_85zd2;
    var BgL_sc_prezd2action_86zd2;
    var sc_hook_87;
    var sc_result_88;
    var BgL_sc_startzd2gozd2tozd2end_89zd2;
    var BgL_sc_prezd2action_90zd2;
    var sc_hook_91;
    var sc_result_92;
    var BgL_sc_startzd2gozd2tozd2end_93zd2;
    var BgL_sc_getzd2startzd2endzd2text_94zd2;
    var BgL_sc_prezd2action_95zd2;
    var sc_hook_96;
    var sc_result_97;
    var BgL_sc_startzd2gozd2tozd2end_98zd2;
    var BgL_sc_getzd2startzd2endzd2text_99zd2;
    var BgL_sc_prezd2action_100zd2;
    var sc_hook_101;
    var sc_result_102;
    var BgL_sc_startzd2gozd2tozd2end_103zd2;
    var BgL_sc_getzd2startzd2endzd2text_104zd2;
    var BgL_sc_prezd2action_105zd2;
    var BgL_sc_prezd2action_106zd2;
    var BgL_sc_yytextzf3_107zf3;
    var sc_storage_108;
    var r;
    var BgL_sc_startzd2func_109zd2;
    var BgL_sc_getzd2startzd2offset_110z00;
    var BgL_sc_getzd2startzd2column_111z00;
    var BgL_sc_getzd2startzd2line_112z00;
    var BgL_sc_initzd2lexeme_113zd2;
    var BgL_sc_startzd2func_114zd2;
    var BgL_sc_getzd2startzd2line_115z00;
    var BgL_sc_initzd2lexeme_116zd2;
    var BgL_sc_startzd2func_117zd2;
    var BgL_sc_initzd2lexeme_118zd2;
    var v;
    var len;
    var sc_v_119;
    var sc_len_120;
    var BgL_sc_counterszd2type_121zd2;
    var BgL_sc_zc3zc3EOFze3ze3zd2prezd2action_122z00;
    var BgL_sc_zc3zc3ERRORze3ze3zd2prezd2action_123z00;
    var BgL_sc_ruleszd2prezd2actions_124z00;
    var BgL_sc_tablezd2nlzd2start_125z00;
    var BgL_sc_tablezd2nozd2nlzd2start_126zd2;
    var BgL_sc_treeszd2v_127zd2;
    var BgL_sc_acczd2v_128zd2;
    var BgL_sc_ISzd2startzd2gozd2tozd2end_129z00;
    var BgL_sc_ISzd2endzd2gozd2tozd2point_130z00;
    var BgL_sc_ISzd2initzd2lexeme_131z00;
    var BgL_sc_ISzd2getzd2startzd2line_132zd2;
    var BgL_sc_ISzd2getzd2startzd2column_133zd2;
    var BgL_sc_ISzd2getzd2startzd2offset_134zd2;
    var BgL_sc_ISzd2peekzd2leftzd2context_135zd2;
    var BgL_sc_ISzd2peekzd2char_136z00;
    var BgL_sc_ISzd2readzd2char_137z00;
    var BgL_sc_ISzd2getzd2startzd2endzd2text_138z00;
    var BgL_sc_ISzd2userzd2getc_139z00;
    var BgL_sc_ISzd2userzd2ungetc_140z00;
    var BgL_sc_zc3zc3EOFze3ze3zd2action_141zd2;
    var BgL_sc_zc3zc3ERRORze3ze3zd2action_142zd2;
    var BgL_sc_ruleszd2actions_143zd2;
    var states;
    var BgL_sc_finalzd2lexer_144zd2;
    var BgL_sc_hookzd2list_145zd2;
    var BgL_sc_preparezd2specialzd2action_146z00;
    var BgL_sc_preparezd2dispatchzd2tree_147z00;
    var BgL_sc_preparezd2transition_148zd2;
    var BgL_sc_preparezd2start_149zd2;
    {
      (BgL_sc_counterszd2type_121zd2 = undefined);
      (BgL_sc_zc3zc3EOFze3ze3zd2prezd2action_122z00 = undefined);
      (BgL_sc_zc3zc3ERRORze3ze3zd2prezd2action_123z00 = undefined);
      (BgL_sc_ruleszd2prezd2actions_124z00 = undefined);
      (BgL_sc_tablezd2nlzd2start_125z00 = undefined);
      (BgL_sc_tablezd2nozd2nlzd2start_126zd2 = undefined);
      (BgL_sc_treeszd2v_127zd2 = undefined);
      (BgL_sc_acczd2v_128zd2 = undefined);
      (BgL_sc_ISzd2startzd2gozd2tozd2end_129z00 = undefined);
      (BgL_sc_ISzd2endzd2gozd2tozd2point_130z00 = undefined);
      (BgL_sc_ISzd2initzd2lexeme_131z00 = undefined);
      (BgL_sc_ISzd2getzd2startzd2line_132zd2 = undefined);
      (BgL_sc_ISzd2getzd2startzd2column_133zd2 = undefined);
      (BgL_sc_ISzd2getzd2startzd2offset_134zd2 = undefined);
      (BgL_sc_ISzd2peekzd2leftzd2context_135zd2 = undefined);
      (BgL_sc_ISzd2peekzd2char_136z00 = undefined);
      (BgL_sc_ISzd2readzd2char_137z00 = undefined);
      (BgL_sc_ISzd2getzd2startzd2endzd2text_138z00 = undefined);
      (BgL_sc_ISzd2userzd2getc_139z00 = undefined);
      (BgL_sc_ISzd2userzd2ungetc_140z00 = undefined);
      (BgL_sc_zc3zc3EOFze3ze3zd2action_141zd2 = false);
      (BgL_sc_zc3zc3ERRORze3ze3zd2action_142zd2 = false);
      (BgL_sc_ruleszd2actions_143zd2 = false);
      (states = false);
      (BgL_sc_finalzd2lexer_144zd2 = false);
      (BgL_sc_hookzd2list_145zd2 = null);
      BgL_sc_preparezd2specialzd2action_146z00 = function(BgL_sc_prezd2action_150zd2) {
        var sc_hook_151;
        var sc_result_152;
        var sc_action_153;
        var BgL_sc_prezd2action_154zd2;
        var sc_hook_155;
        var sc_result_156;
        var sc_action_157;
        var BgL_sc_prezd2action_158zd2;
        var sc_hook_159;
        var sc_result_160;
        var sc_action_161;
        var BgL_sc_prezd2action_162zd2;
        return ((BgL_sc_counterszd2type_121zd2==="none")?((BgL_sc_prezd2action_162zd2 = BgL_sc_prezd2action_150zd2), (sc_action_161 = false), (sc_result_160 = function() {
          return ((0,sc_action_161)((new sc_String(""))));
        }), (sc_hook_159 = function() {
          return (sc_action_161 = ((0,BgL_sc_prezd2action_162zd2)(BgL_sc_finalzd2lexer_144zd2, BgL_sc_ISzd2userzd2getc_139z00, BgL_sc_ISzd2userzd2ungetc_140z00)));
        }), (BgL_sc_hookzd2list_145zd2 = (new sc_Pair(sc_hook_159, BgL_sc_hookzd2list_145zd2))), sc_result_160):((BgL_sc_counterszd2type_121zd2==="line")?((BgL_sc_prezd2action_158zd2 = BgL_sc_prezd2action_150zd2), (sc_action_157 = false), (sc_result_156 = function(yyline) {
          return ((0,sc_action_157)((new sc_String("")), yyline));
        }), (sc_hook_155 = function() {
          return (sc_action_157 = ((0,BgL_sc_prezd2action_158zd2)(BgL_sc_finalzd2lexer_144zd2, BgL_sc_ISzd2userzd2getc_139z00, BgL_sc_ISzd2userzd2ungetc_140z00)));
        }), (BgL_sc_hookzd2list_145zd2 = (new sc_Pair(sc_hook_155, BgL_sc_hookzd2list_145zd2))), sc_result_156):((BgL_sc_counterszd2type_121zd2==="all")?((BgL_sc_prezd2action_154zd2 = BgL_sc_prezd2action_150zd2), (sc_action_153 = false), (sc_result_152 = function(yyline, yycolumn, yyoffset) {
          return ((0,sc_action_153)((new sc_String("")), yyline, yycolumn, yyoffset));
        }), (sc_hook_151 = function() {
          return (sc_action_153 = ((0,BgL_sc_prezd2action_154zd2)(BgL_sc_finalzd2lexer_144zd2, BgL_sc_ISzd2userzd2getc_139z00, BgL_sc_ISzd2userzd2ungetc_140z00)));
        }), (BgL_sc_hookzd2list_145zd2 = (new sc_Pair(sc_hook_151, BgL_sc_hookzd2list_145zd2))), sc_result_152):false)));
      };
      BgL_sc_preparezd2dispatchzd2tree_147z00 = function(tree) {
        var BgL_sc_rightzd2func_163zd2;
        var BgL_sc_leftzd2func_164zd2;
        var bound;
        var BgL_sc_rightzd2tree_165zd2;
        var BgL_sc_leftzd2tree_166zd2;
        var BgL_sc_rightzd2func_167zd2;
        var BgL_sc_leftzd2func_168zd2;
        var sc_bound_169;
        var BgL_sc_rightzd2tree_170zd2;
        var BgL_sc_leftzd2tree_171zd2;
        var sc_hook_172;
        var sc_result_173;
        var BgL_sc_statezd2function_174zd2;
        var leaf;
        return (!(tree instanceof sc_Pair)?((tree==="err")?function(c) {
          return false;
        }:((leaf = tree), (BgL_sc_statezd2function_174zd2 = false), (sc_result_173 = function(c) {
          return BgL_sc_statezd2function_174zd2;
        }), (sc_hook_172 = function() {
          return (BgL_sc_statezd2function_174zd2 = (states[leaf]));
        }), (BgL_sc_hookzd2list_145zd2 = (new sc_Pair(sc_hook_172, BgL_sc_hookzd2list_145zd2))), sc_result_173)):(((tree.car)==="=")?((BgL_sc_leftzd2tree_171zd2 = ((0,sc_listRef)(tree, (2)))), (BgL_sc_rightzd2tree_170zd2 = ((0,sc_listRef)(tree, (3)))), (sc_bound_169 = ((0,sc_listRef)(tree, (1)))), (BgL_sc_leftzd2func_168zd2 = ((0,BgL_sc_preparezd2dispatchzd2tree_147z00)(BgL_sc_leftzd2tree_171zd2))), (BgL_sc_rightzd2func_167zd2 = ((0,BgL_sc_preparezd2dispatchzd2tree_147z00)(BgL_sc_rightzd2tree_170zd2))), function(c) {
          return ((c===sc_bound_169)?((0,BgL_sc_leftzd2func_168zd2)(c)):((0,BgL_sc_rightzd2func_167zd2)(c)));
        }):((BgL_sc_leftzd2tree_166zd2 = ((0,sc_listRef)(tree, (1)))), (BgL_sc_rightzd2tree_165zd2 = ((0,sc_listRef)(tree, (2)))), (bound = ((0,sc_listRef)(tree, (0)))), (BgL_sc_leftzd2func_164zd2 = ((0,BgL_sc_preparezd2dispatchzd2tree_147z00)(BgL_sc_leftzd2tree_166zd2))), (BgL_sc_rightzd2func_163zd2 = ((0,BgL_sc_preparezd2dispatchzd2tree_147z00)(BgL_sc_rightzd2tree_165zd2))), function(c) {
          return ((c<bound)?((0,BgL_sc_leftzd2func_164zd2)(c)):((0,BgL_sc_rightzd2func_163zd2)(c)));
        })));
      };
      BgL_sc_preparezd2transition_148zd2 = function(tree) {
        var BgL_sc_readzd2char_175zd2;
        var BgL_sc_dispatchzd2func_176zd2;
        var BgL_sc_dichozd2func_177zd2;
        return ((tree==="err")?function() {
          return false;
        }:((BgL_sc_dispatchzd2func_176zd2 = ((BgL_sc_dichozd2func_177zd2 = ((0,BgL_sc_preparezd2dispatchzd2tree_147z00)(tree))), function(c) {
          return ((c!== false)?((0,BgL_sc_dichozd2func_177zd2)(c)):false);
        })), (BgL_sc_readzd2char_175zd2 = BgL_sc_ISzd2readzd2char_137z00), function() {
          return ((0,BgL_sc_dispatchzd2func_176zd2)(((0,BgL_sc_readzd2char_175zd2)())));
        }));
      };
      BgL_sc_preparezd2start_149zd2 = function() {
        var sc_hook_178;
        var sc_result_179;
        var BgL_sc_errorzd2action_180zd2;
        var BgL_sc_startzd2state2_181zd2;
        var BgL_sc_startzd2state1_182zd2;
        var BgL_sc_peekzd2leftzd2context_183z00;
        var BgL_sc_eofzd2action_184zd2;
        var BgL_sc_peekzd2char_185zd2;
        var s2;
        var s1;
        var sc_hook_186;
        var sc_result_187;
        var BgL_sc_errorzd2action_188zd2;
        var BgL_sc_startzd2state_189zd2;
        var BgL_sc_eofzd2action_190zd2;
        var BgL_sc_peekzd2char_191zd2;
        var sc_s1_192;
        return ((BgL_sc_tablezd2nlzd2start_125z00===BgL_sc_tablezd2nozd2nlzd2start_126zd2)?((sc_s1_192 = BgL_sc_tablezd2nlzd2start_125z00), (BgL_sc_peekzd2char_191zd2 = BgL_sc_ISzd2peekzd2char_136z00), (BgL_sc_eofzd2action_190zd2 = false), (BgL_sc_startzd2state_189zd2 = false), (BgL_sc_errorzd2action_188zd2 = false), (sc_result_187 = function() {
          return ((((0,BgL_sc_peekzd2char_191zd2)())=== false)?BgL_sc_eofzd2action_190zd2:((0,BgL_sc_startzd2state_189zd2)(BgL_sc_errorzd2action_188zd2)));
        }), (sc_hook_186 = function() {
          return ((BgL_sc_eofzd2action_190zd2 = BgL_sc_zc3zc3EOFze3ze3zd2action_141zd2), (BgL_sc_startzd2state_189zd2 = (states[sc_s1_192])), (BgL_sc_errorzd2action_188zd2 = BgL_sc_zc3zc3ERRORze3ze3zd2action_142zd2));
        }), (BgL_sc_hookzd2list_145zd2 = (new sc_Pair(sc_hook_186, BgL_sc_hookzd2list_145zd2))), sc_result_187):((s1 = BgL_sc_tablezd2nlzd2start_125z00), (s2 = BgL_sc_tablezd2nozd2nlzd2start_126zd2), (BgL_sc_peekzd2char_185zd2 = BgL_sc_ISzd2peekzd2char_136z00), (BgL_sc_eofzd2action_184zd2 = false), (BgL_sc_peekzd2leftzd2context_183z00 = BgL_sc_ISzd2peekzd2leftzd2context_135zd2), (BgL_sc_startzd2state1_182zd2 = false), (BgL_sc_startzd2state2_181zd2 = false), (BgL_sc_errorzd2action_180zd2 = false), (sc_result_179 = function() {
          return ((((0,BgL_sc_peekzd2char_185zd2)())=== false)?BgL_sc_eofzd2action_184zd2:((((0,BgL_sc_peekzd2leftzd2context_183z00)())===BgL_lexerzd2integerzd2newlinez00)?((0,BgL_sc_startzd2state1_182zd2)(BgL_sc_errorzd2action_180zd2)):((0,BgL_sc_startzd2state2_181zd2)(BgL_sc_errorzd2action_180zd2))));
        }), (sc_hook_178 = function() {
          return ((BgL_sc_eofzd2action_184zd2 = BgL_sc_zc3zc3EOFze3ze3zd2action_141zd2), (BgL_sc_startzd2state1_182zd2 = (states[s1])), (BgL_sc_startzd2state2_181zd2 = (states[s2])), (BgL_sc_errorzd2action_180zd2 = BgL_sc_zc3zc3ERRORze3ze3zd2action_142zd2));
        }), (BgL_sc_hookzd2list_145zd2 = (new sc_Pair(sc_hook_178, BgL_sc_hookzd2list_145zd2))), sc_result_179));
      };
      (BgL_sc_ISzd2userzd2ungetc_140z00 = (((0,sc_assq)("user-ungetc", IS)).cdr));
      (BgL_sc_ISzd2userzd2getc_139z00 = (((0,sc_assq)("user-getc", IS)).cdr));
      (((0,sc_assq)("get-user-offset", IS)).cdr);
      (((0,sc_assq)("get-user-column", IS)).cdr);
      (((0,sc_assq)("get-user-line", IS)).cdr);
      (BgL_sc_ISzd2getzd2startzd2endzd2text_138z00 = (((0,sc_assq)("get-start-end-text", IS)).cdr));
      (BgL_sc_ISzd2readzd2char_137z00 = (((0,sc_assq)("read-char", IS)).cdr));
      (BgL_sc_ISzd2peekzd2char_136z00 = (((0,sc_assq)("peek-char", IS)).cdr));
      (BgL_sc_ISzd2peekzd2leftzd2context_135zd2 = (((0,sc_assq)("peek-left-context", IS)).cdr));
      (BgL_sc_ISzd2getzd2startzd2offset_134zd2 = (((0,sc_assq)("get-start-offset", IS)).cdr));
      (BgL_sc_ISzd2getzd2startzd2column_133zd2 = (((0,sc_assq)("get-start-column", IS)).cdr));
      (BgL_sc_ISzd2getzd2startzd2line_132zd2 = (((0,sc_assq)("get-start-line", IS)).cdr));
      (BgL_sc_ISzd2initzd2lexeme_131z00 = (((0,sc_assq)("init-lexeme", IS)).cdr));
      (BgL_sc_ISzd2endzd2gozd2tozd2point_130z00 = (((0,sc_assq)("end-go-to-point", IS)).cdr));
      (BgL_sc_ISzd2startzd2gozd2tozd2end_129z00 = (((0,sc_assq)("start-go-to-end", IS)).cdr));
      (BgL_sc_acczd2v_128zd2 = (tables[(8)]));
      (BgL_sc_treeszd2v_127zd2 = (tables[(7)]));
      (BgL_sc_tablezd2nozd2nlzd2start_126zd2 = (tables[(6)]));
      (BgL_sc_tablezd2nlzd2start_125z00 = (tables[(5)]));
      (BgL_sc_ruleszd2prezd2actions_124z00 = (tables[(3)]));
      (BgL_sc_zc3zc3ERRORze3ze3zd2prezd2action_123z00 = (tables[(2)]));
      (BgL_sc_zc3zc3EOFze3ze3zd2prezd2action_122z00 = (tables[(1)]));
      (BgL_sc_counterszd2type_121zd2 = (tables[(0)]));
      (BgL_sc_zc3zc3EOFze3ze3zd2action_141zd2 = ((0,BgL_sc_preparezd2specialzd2action_146z00)(BgL_sc_zc3zc3EOFze3ze3zd2prezd2action_122z00)));
      (BgL_sc_zc3zc3ERRORze3ze3zd2action_142zd2 = ((0,BgL_sc_preparezd2specialzd2action_146z00)(BgL_sc_zc3zc3ERRORze3ze3zd2prezd2action_123z00)));
      (sc_len_120 = (parseInt((BgL_sc_ruleszd2prezd2actions_124z00.length)/(2))));
      (sc_v_119 = ((0,sc_makeVector)(sc_len_120)));
      (r = (sc_len_120-(1)));
      while (!(r<(0))) {
        {
          (sc_storage_108 = {});
          (BgL_sc_yytextzf3_107zf3 = (BgL_sc_ruleszd2prezd2actions_124z00[((2)*r)]));
          (BgL_sc_prezd2action_106zd2 = (BgL_sc_ruleszd2prezd2actions_124z00[(((2)*r)+(1))]));
          (action = ((BgL_sc_yytextzf3_107zf3!== false)?((BgL_sc_counterszd2type_121zd2==="none")?((BgL_sc_prezd2action_105zd2 = BgL_sc_prezd2action_106zd2), (BgL_sc_getzd2startzd2endzd2text_104zd2 = BgL_sc_ISzd2getzd2startzd2endzd2text_138z00), (BgL_sc_startzd2gozd2tozd2end_103zd2 = BgL_sc_ISzd2startzd2gozd2tozd2end_129z00), (sc_storage_108.sc_action_198 = false), (sc_result_102 = function(sc_storage_108, BgL_sc_getzd2startzd2endzd2text_104zd2, BgL_sc_startzd2gozd2tozd2end_103zd2) {
            return function() {
              var yytext;
              return ((yytext = ((0,BgL_sc_getzd2startzd2endzd2text_104zd2)())), ((0,BgL_sc_startzd2gozd2tozd2end_103zd2)()), ((0,sc_storage_108.sc_action_198)(yytext)));
            };
          }(sc_storage_108, BgL_sc_getzd2startzd2endzd2text_104zd2, BgL_sc_startzd2gozd2tozd2end_103zd2)
), (sc_hook_101 = function(sc_storage_108, BgL_sc_prezd2action_105zd2) {
            return function() {
              return (sc_storage_108.sc_action_198 = ((0,BgL_sc_prezd2action_105zd2)(BgL_sc_finalzd2lexer_144zd2, BgL_sc_ISzd2userzd2getc_139z00, BgL_sc_ISzd2userzd2ungetc_140z00)));
            };
          }(sc_storage_108, BgL_sc_prezd2action_105zd2)
), (BgL_sc_hookzd2list_145zd2 = (new sc_Pair(sc_hook_101, BgL_sc_hookzd2list_145zd2))), sc_result_102):((BgL_sc_counterszd2type_121zd2==="line")?((BgL_sc_prezd2action_100zd2 = BgL_sc_prezd2action_106zd2), (BgL_sc_getzd2startzd2endzd2text_99zd2 = BgL_sc_ISzd2getzd2startzd2endzd2text_138z00), (BgL_sc_startzd2gozd2tozd2end_98zd2 = BgL_sc_ISzd2startzd2gozd2tozd2end_129z00), (sc_storage_108.sc_action_197 = false), (sc_result_97 = function(sc_storage_108, BgL_sc_getzd2startzd2endzd2text_99zd2, BgL_sc_startzd2gozd2tozd2end_98zd2) {
            return function(yyline) {
              var yytext;
              return ((yytext = ((0,BgL_sc_getzd2startzd2endzd2text_99zd2)())), ((0,BgL_sc_startzd2gozd2tozd2end_98zd2)()), ((0,sc_storage_108.sc_action_197)(yytext, yyline)));
            };
          }(sc_storage_108, BgL_sc_getzd2startzd2endzd2text_99zd2, BgL_sc_startzd2gozd2tozd2end_98zd2)
), (sc_hook_96 = function(sc_storage_108, BgL_sc_prezd2action_100zd2) {
            return function() {
              return (sc_storage_108.sc_action_197 = ((0,BgL_sc_prezd2action_100zd2)(BgL_sc_finalzd2lexer_144zd2, BgL_sc_ISzd2userzd2getc_139z00, BgL_sc_ISzd2userzd2ungetc_140z00)));
            };
          }(sc_storage_108, BgL_sc_prezd2action_100zd2)
), (BgL_sc_hookzd2list_145zd2 = (new sc_Pair(sc_hook_96, BgL_sc_hookzd2list_145zd2))), sc_result_97):((BgL_sc_counterszd2type_121zd2==="all")?((BgL_sc_prezd2action_95zd2 = BgL_sc_prezd2action_106zd2), (BgL_sc_getzd2startzd2endzd2text_94zd2 = BgL_sc_ISzd2getzd2startzd2endzd2text_138z00), (BgL_sc_startzd2gozd2tozd2end_93zd2 = BgL_sc_ISzd2startzd2gozd2tozd2end_129z00), (sc_storage_108.sc_action_196 = false), (sc_result_92 = function(sc_storage_108, BgL_sc_getzd2startzd2endzd2text_94zd2, BgL_sc_startzd2gozd2tozd2end_93zd2) {
            return function(yyline, yycolumn, yyoffset) {
              var yytext;
              return ((yytext = ((0,BgL_sc_getzd2startzd2endzd2text_94zd2)())), ((0,BgL_sc_startzd2gozd2tozd2end_93zd2)()), ((0,sc_storage_108.sc_action_196)(yytext, yyline, yycolumn, yyoffset)));
            };
          }(sc_storage_108, BgL_sc_getzd2startzd2endzd2text_94zd2, BgL_sc_startzd2gozd2tozd2end_93zd2)
), (sc_hook_91 = function(sc_storage_108, BgL_sc_prezd2action_95zd2) {
            return function() {
              return (sc_storage_108.sc_action_196 = ((0,BgL_sc_prezd2action_95zd2)(BgL_sc_finalzd2lexer_144zd2, BgL_sc_ISzd2userzd2getc_139z00, BgL_sc_ISzd2userzd2ungetc_140z00)));
            };
          }(sc_storage_108, BgL_sc_prezd2action_95zd2)
), (BgL_sc_hookzd2list_145zd2 = (new sc_Pair(sc_hook_91, BgL_sc_hookzd2list_145zd2))), sc_result_92):false))):((BgL_sc_counterszd2type_121zd2==="none")?((BgL_sc_prezd2action_90zd2 = BgL_sc_prezd2action_106zd2), (BgL_sc_startzd2gozd2tozd2end_89zd2 = BgL_sc_ISzd2startzd2gozd2tozd2end_129z00), (sc_storage_108.sc_action_195 = false), (sc_result_88 = function(sc_storage_108, BgL_sc_startzd2gozd2tozd2end_89zd2) {
            return function() {
              return (((0,BgL_sc_startzd2gozd2tozd2end_89zd2)()), ((0,sc_storage_108.sc_action_195)()));
            };
          }(sc_storage_108, BgL_sc_startzd2gozd2tozd2end_89zd2)
), (sc_hook_87 = function(sc_storage_108, BgL_sc_prezd2action_90zd2) {
            return function() {
              return (sc_storage_108.sc_action_195 = ((0,BgL_sc_prezd2action_90zd2)(BgL_sc_finalzd2lexer_144zd2, BgL_sc_ISzd2userzd2getc_139z00, BgL_sc_ISzd2userzd2ungetc_140z00)));
            };
          }(sc_storage_108, BgL_sc_prezd2action_90zd2)
), (BgL_sc_hookzd2list_145zd2 = (new sc_Pair(sc_hook_87, BgL_sc_hookzd2list_145zd2))), sc_result_88):((BgL_sc_counterszd2type_121zd2==="line")?((BgL_sc_prezd2action_86zd2 = BgL_sc_prezd2action_106zd2), (BgL_sc_startzd2gozd2tozd2end_85zd2 = BgL_sc_ISzd2startzd2gozd2tozd2end_129z00), (sc_storage_108.sc_action_194 = false), (sc_result_84 = function(sc_storage_108, BgL_sc_startzd2gozd2tozd2end_85zd2) {
            return function(yyline) {
              return (((0,BgL_sc_startzd2gozd2tozd2end_85zd2)()), ((0,sc_storage_108.sc_action_194)(yyline)));
            };
          }(sc_storage_108, BgL_sc_startzd2gozd2tozd2end_85zd2)
), (sc_hook_83 = function(sc_storage_108, BgL_sc_prezd2action_86zd2) {
            return function() {
              return (sc_storage_108.sc_action_194 = ((0,BgL_sc_prezd2action_86zd2)(BgL_sc_finalzd2lexer_144zd2, BgL_sc_ISzd2userzd2getc_139z00, BgL_sc_ISzd2userzd2ungetc_140z00)));
            };
          }(sc_storage_108, BgL_sc_prezd2action_86zd2)
), (BgL_sc_hookzd2list_145zd2 = (new sc_Pair(sc_hook_83, BgL_sc_hookzd2list_145zd2))), sc_result_84):((BgL_sc_counterszd2type_121zd2==="all")?((BgL_sc_prezd2action_82zd2 = BgL_sc_prezd2action_106zd2), (BgL_sc_startzd2gozd2tozd2end_81zd2 = BgL_sc_ISzd2startzd2gozd2tozd2end_129z00), (sc_storage_108.sc_action_193 = false), (sc_result_80 = function(sc_storage_108, BgL_sc_startzd2gozd2tozd2end_81zd2) {
            return function(yyline, yycolumn, yyoffset) {
              return (((0,BgL_sc_startzd2gozd2tozd2end_81zd2)()), ((0,sc_storage_108.sc_action_193)(yyline, yycolumn, yyoffset)));
            };
          }(sc_storage_108, BgL_sc_startzd2gozd2tozd2end_81zd2)
), (sc_hook_79 = function(sc_storage_108, BgL_sc_prezd2action_82zd2) {
            return function() {
              return (sc_storage_108.sc_action_193 = ((0,BgL_sc_prezd2action_82zd2)(BgL_sc_finalzd2lexer_144zd2, BgL_sc_ISzd2userzd2getc_139z00, BgL_sc_ISzd2userzd2ungetc_140z00)));
            };
          }(sc_storage_108, BgL_sc_prezd2action_82zd2)
), (BgL_sc_hookzd2list_145zd2 = (new sc_Pair(sc_hook_79, BgL_sc_hookzd2list_145zd2))), sc_result_80):false)))));
          (sc_v_119[r] = action);
          (r = (r-(1)));
        }
      }
      (BgL_sc_ruleszd2actions_143zd2 = sc_v_119);
      (len = (BgL_sc_treeszd2v_127zd2.length));
      (v = ((0,sc_makeVector)(len)));
      (s = (len-(1)));
      while (!(s<(0))) {
        {
          (v[s] = ((storage = {}), (acc = (BgL_sc_acczd2v_128zd2[s])), (sc_r1_78 = (acc.car)), (sc_r2_77 = (acc.cdr)), ((sc_r1_78=== false)?((BgL_sc_transzd2func_76zd2 = ((0,BgL_sc_preparezd2transition_148zd2)((BgL_sc_treeszd2v_127zd2[s])))), function(BgL_sc_transzd2func_76zd2) {
            return function(sc_action_203) {
              var BgL_sc_nextzd2state_204zd2;
              return ((BgL_sc_nextzd2state_204zd2 = ((0,BgL_sc_transzd2func_76zd2)())), ((BgL_sc_nextzd2state_204zd2!== false)?((0,BgL_sc_nextzd2state_204zd2)(sc_action_203)):sc_action_203));
            };
          }(BgL_sc_transzd2func_76zd2)
):((sc_r2_77=== false)?((sc_r1_75 = sc_r1_78), (BgL_sc_peekzd2char_74zd2 = BgL_sc_ISzd2peekzd2char_136z00), (BgL_sc_endzd2gozd2tozd2point_73zd2 = BgL_sc_ISzd2endzd2gozd2tozd2point_130z00), (storage.BgL_sc_newzd2action1_202zd2 = false), (BgL_sc_transzd2func_72zd2 = ((0,BgL_sc_preparezd2transition_148zd2)((BgL_sc_treeszd2v_127zd2[s])))), (sc_result_71 = function(storage, BgL_sc_transzd2func_72zd2, BgL_sc_peekzd2char_74zd2, BgL_sc_endzd2gozd2tozd2point_73zd2) {
            return function(sc_action_205) {
              var BgL_sc_nextzd2state_206zd2;
              var BgL_sc_newzd2action_207zd2;
              var tmp1472;
              var c;
              return ((c = ((0,BgL_sc_peekzd2char_74zd2)())), (BgL_sc_newzd2action_207zd2 = ((((tmp1472 = (c=== false)), ((tmp1472!== false)?tmp1472:(c===BgL_lexerzd2integerzd2newlinez00)))!== false)?(((0,BgL_sc_endzd2gozd2tozd2point_73zd2)()), storage.BgL_sc_newzd2action1_202zd2):sc_action_205)), (BgL_sc_nextzd2state_206zd2 = ((0,BgL_sc_transzd2func_72zd2)())), ((BgL_sc_nextzd2state_206zd2!== false)?((0,BgL_sc_nextzd2state_206zd2)(BgL_sc_newzd2action_207zd2)):BgL_sc_newzd2action_207zd2));
            };
          }(storage, BgL_sc_transzd2func_72zd2, BgL_sc_peekzd2char_74zd2, BgL_sc_endzd2gozd2tozd2point_73zd2)
), (sc_hook_70 = function(storage, sc_r1_75) {
            return function() {
              return (storage.BgL_sc_newzd2action1_202zd2 = (BgL_sc_ruleszd2actions_143zd2[sc_r1_75]));
            };
          }(storage, sc_r1_75)
), (BgL_sc_hookzd2list_145zd2 = (new sc_Pair(sc_hook_70, BgL_sc_hookzd2list_145zd2))), sc_result_71):((sc_r1_78<sc_r2_77)?((sc_r1_69 = sc_r1_78), (r2 = sc_r2_77), (BgL_sc_endzd2gozd2tozd2point_68zd2 = BgL_sc_ISzd2endzd2gozd2tozd2point_130z00), (BgL_sc_peekzd2char_67zd2 = BgL_sc_ISzd2peekzd2char_136z00), (storage.BgL_sc_newzd2action1_201zd2 = false), (storage.BgL_sc_newzd2action2_200zd2 = false), (BgL_sc_transzd2func_66zd2 = ((0,BgL_sc_preparezd2transition_148zd2)((BgL_sc_treeszd2v_127zd2[s])))), (sc_result_65 = function(storage, BgL_sc_endzd2gozd2tozd2point_68zd2, BgL_sc_peekzd2char_67zd2, BgL_sc_transzd2func_66zd2) {
            return function(sc_action_208) {
              var BgL_sc_nextzd2state_209zd2;
              var BgL_sc_newzd2action_210zd2;
              var tmp1473;
              var c;
              return (((0,BgL_sc_endzd2gozd2tozd2point_68zd2)()), (c = ((0,BgL_sc_peekzd2char_67zd2)())), (BgL_sc_newzd2action_210zd2 = ((((tmp1473 = (c=== false)), ((tmp1473!== false)?tmp1473:(c===BgL_lexerzd2integerzd2newlinez00)))!== false)?storage.BgL_sc_newzd2action1_201zd2:storage.BgL_sc_newzd2action2_200zd2)), (BgL_sc_nextzd2state_209zd2 = ((0,BgL_sc_transzd2func_66zd2)())), ((BgL_sc_nextzd2state_209zd2!== false)?((0,BgL_sc_nextzd2state_209zd2)(BgL_sc_newzd2action_210zd2)):BgL_sc_newzd2action_210zd2));
            };
          }(storage, BgL_sc_endzd2gozd2tozd2point_68zd2, BgL_sc_peekzd2char_67zd2, BgL_sc_transzd2func_66zd2)
), (sc_hook_64 = function(storage, sc_r1_69, r2) {
            return function() {
              return ((storage.BgL_sc_newzd2action1_201zd2 = (BgL_sc_ruleszd2actions_143zd2[sc_r1_69])), (storage.BgL_sc_newzd2action2_200zd2 = (BgL_sc_ruleszd2actions_143zd2[r2])));
            };
          }(storage, sc_r1_69, r2)
), (BgL_sc_hookzd2list_145zd2 = (new sc_Pair(sc_hook_64, BgL_sc_hookzd2list_145zd2))), sc_result_65):((r1 = sc_r1_78), (BgL_sc_endzd2gozd2tozd2point_63zd2 = BgL_sc_ISzd2endzd2gozd2tozd2point_130z00), (BgL_sc_transzd2func_62zd2 = ((0,BgL_sc_preparezd2transition_148zd2)((BgL_sc_treeszd2v_127zd2[s])))), (storage.BgL_sc_newzd2action_199zd2 = false), (result = function(storage, BgL_sc_endzd2gozd2tozd2point_63zd2, BgL_sc_transzd2func_62zd2) {
            return function(sc_action_211) {
              var BgL_sc_nextzd2state_212zd2;
              return (((0,BgL_sc_endzd2gozd2tozd2point_63zd2)()), (BgL_sc_nextzd2state_212zd2 = ((0,BgL_sc_transzd2func_62zd2)())), ((BgL_sc_nextzd2state_212zd2!== false)?((0,BgL_sc_nextzd2state_212zd2)(storage.BgL_sc_newzd2action_199zd2)):storage.BgL_sc_newzd2action_199zd2));
            };
          }(storage, BgL_sc_endzd2gozd2tozd2point_63zd2, BgL_sc_transzd2func_62zd2)
), (hook = function(storage, r1) {
            return function() {
              return (storage.BgL_sc_newzd2action_199zd2 = (BgL_sc_ruleszd2actions_143zd2[r1]));
            };
          }(storage, r1)
), (BgL_sc_hookzd2list_145zd2 = (new sc_Pair(hook, BgL_sc_hookzd2list_145zd2))), result))))));
          (s = (s-(1)));
        }
      }
      (states = v);
      (BgL_sc_finalzd2lexer_144zd2 = ((BgL_sc_counterszd2type_121zd2==="none")?((BgL_sc_initzd2lexeme_118zd2 = BgL_sc_ISzd2initzd2lexeme_131z00), (BgL_sc_startzd2func_117zd2 = ((0,BgL_sc_preparezd2start_149zd2)())), function() {
        return (((0,BgL_sc_initzd2lexeme_118zd2)()), (((0,BgL_sc_startzd2func_117zd2)())()));
      }):((BgL_sc_counterszd2type_121zd2==="line")?((BgL_sc_initzd2lexeme_116zd2 = BgL_sc_ISzd2initzd2lexeme_131z00), (BgL_sc_getzd2startzd2line_115z00 = BgL_sc_ISzd2getzd2startzd2line_132zd2), (BgL_sc_startzd2func_114zd2 = ((0,BgL_sc_preparezd2start_149zd2)())), function() {
        var yyline;
        return (((0,BgL_sc_initzd2lexeme_116zd2)()), (yyline = ((0,BgL_sc_getzd2startzd2line_115z00)())), (((0,BgL_sc_startzd2func_114zd2)())(yyline)));
      }):((BgL_sc_counterszd2type_121zd2==="all")?((BgL_sc_initzd2lexeme_113zd2 = BgL_sc_ISzd2initzd2lexeme_131z00), (BgL_sc_getzd2startzd2line_112z00 = BgL_sc_ISzd2getzd2startzd2line_132zd2), (BgL_sc_getzd2startzd2column_111z00 = BgL_sc_ISzd2getzd2startzd2column_133zd2), (BgL_sc_getzd2startzd2offset_110z00 = BgL_sc_ISzd2getzd2startzd2offset_134zd2), (BgL_sc_startzd2func_109zd2 = ((0,BgL_sc_preparezd2start_149zd2)())), function() {
        var yyoffset;
        var yycolumn;
        var yyline;
        return (((0,BgL_sc_initzd2lexeme_113zd2)()), (yyline = ((0,BgL_sc_getzd2startzd2line_112z00)())), (yycolumn = ((0,BgL_sc_getzd2startzd2column_111z00)())), (yyoffset = ((0,BgL_sc_getzd2startzd2offset_110z00)())), (((0,BgL_sc_startzd2func_109zd2)())(yyline, yycolumn, yyoffset)));
      }):false))));
      (l = BgL_sc_hookzd2list_145zd2);
      while ((l instanceof sc_Pair)) {
        {
          ((l.car)());
          (l = (l.cdr));
        }
      }
      return BgL_sc_finalzd2lexer_144zd2;
    }
  };
  (BgL_lexerzd2makezd2charzd2lexerzd2 = ((BgL_sc_charzd2ze3class_5z31_clce_l = function(c) {
    var n;
    return ((n = (c.val.charCodeAt(0))), ((0,sc_list)((new sc_Pair(n, n)))));
  }), (BgL_sc_mergezd2sort_4zd2_clce_l = function(l, combine, BgL_sc_za7erozd2elt_213z75) {
    var loop2;
    var sc_l_214;
    if ((l === null))
      return BgL_sc_za7erozd2elt_213z75;
    else
      {
        (sc_l_214 = l);
        while (!((sc_l_214.cdr) === null)) {
          (sc_l_214 = ((loop2 = function(l) {
            var sc_l_215;
            return ((l === null)?l:(((l.cdr) === null)?l:(new sc_Pair(((0,combine)((l.car), (l.cdr.car))), ((sc_l_215 = (l.cdr.cdr)), ((sc_l_215 === null)?sc_l_215:(((sc_l_215.cdr) === null)?sc_l_215:(new sc_Pair(((0,combine)((sc_l_215.car), (sc_l_215.cdr.car))), ((0,loop2)((sc_l_215.cdr.cdr))))))))))));
          }), ((sc_l_214 === null)?sc_l_214:(((sc_l_214.cdr) === null)?sc_l_214:(new sc_Pair(((0,combine)((sc_l_214.car), (sc_l_214.cdr.car))), ((0,loop2)((sc_l_214.cdr.cdr)))))))));
        }
        return (sc_l_214.car);
      }
  }), (BgL_sc_finitezd2classzd2union_3z00_clce_l = function(c1, c2) {
    var r2end;
    var r2start;
    var r1end;
    var r1start;
    var r2;
    var r1;
    var sc_c1_216;
    var sc_c2_217;
    var u;
    {
      (u = null);
      (sc_c1_216 = c1);
      (sc_c2_217 = c2);
      while (true) {
        if ((sc_c1_216 === null))
          if ((sc_c2_217 === null))
            return ((0,sc_reverse)(u));
          else
            {
              (u = (new sc_Pair((sc_c2_217.car), u)));
              (sc_c2_217 = (sc_c2_217.cdr));
            }
        else
          if ((sc_c2_217 === null))
            {
              (u = (new sc_Pair((sc_c1_216.car), u)));
              (sc_c1_216 = (sc_c1_216.cdr));
            }
          else
            {
              (r1 = (sc_c1_216.car));
              (r2 = (sc_c2_217.car));
              (r1start = (r1.car));
              (r1end = (r1.cdr));
              (r2start = (r2.car));
              (r2end = (r2.cdr));
              if ((r1start<=r2start))
                if (((r1end+(1))<r2start))
                  {
                    (sc_c1_216 = (sc_c1_216.cdr));
                    (u = (new sc_Pair(r1, u)));
                  }
                else
                  if ((r1end<=r2end))
                    {
                      (sc_c1_216 = (sc_c1_216.cdr));
                      (sc_c2_217 = (new sc_Pair((new sc_Pair(r1start, r2end)), (sc_c2_217.cdr))));
                    }
                  else
                    (sc_c2_217 = (sc_c2_217.cdr));
              else
                if ((r1start>(r2end+(1))))
                  {
                    (sc_c2_217 = (sc_c2_217.cdr));
                    (u = (new sc_Pair(r2, u)));
                  }
                else
                  if ((r1end>=r2end))
                    {
                      (sc_c1_216 = (new sc_Pair((new sc_Pair(r2start, r1end)), (sc_c1_216.cdr))));
                      (sc_c2_217 = (sc_c2_217.cdr));
                    }
                  else
                    (sc_c1_216 = (sc_c1_216.cdr));
            }
      }
    }
  }), (BgL_sc_classzd2zc3_2z11_clce_l = function(b1, b2) {
    return ((b1==="inf+")?false:((b2==="inf-")?false:((b1==="inf-")?true:((b2==="inf+")?true:(b1<b2)))));
  }), (BgL_sc_mergezd2sharcs_1zd2_clce_l = function(l1, l2) {
    var loop;
    return ((loop = function(l1, l2) {
      var b2;
      var b1;
      var sharc2;
      var sharc1;
      return ((l1 === null)?l2:((l2 === null)?l1:((sharc1 = (l1.car)), (sharc2 = (l2.car)), ((((b1 = (sharc1.car.car)), (b2 = (sharc2.car.car)), ((b1==="inf-")?true:((b2==="inf+")?true:((b1==="inf+")?false:((b2==="inf-")?false:(b1<=b2))))))!== false)?(new sc_Pair(sharc1, ((0,loop)((l1.cdr), l2)))):(new sc_Pair(sharc2, ((0,loop)(l1, (l2.cdr)))))))));
    }), ((0,loop)(l1, l2)));
  }), function(tables, IS) {
    var optrOpnd;
    var sc_optrOpnd_218;
    var tail1493;
    var L1489;
    var tail1488;
    var L1484;
    var loop;
    var table;
    var falseHead1492;
    var op;
    var BgL_sc_fullzd2sharcs_219zd2;
    var sc_loop_220;
    var BgL_sc_sortedzd2sharcs_221zd2;
    var BgL_sc_sharcszd2l_222zd2;
    var falseHead1487;
    var sc_op_223;
    var charcs;
    var i;
    var v;
    var len;
    var BgL_sc_acczd2v_224zd2;
    var BgL_sc_charcszd2v_225zd2;
    var BgL_sc_nozd2nlzd2start_226z00;
    var BgL_sc_nlzd2start_227zd2;
    var BgL_sc_ruleszd2actions_228zd2;
    var BgL_sc_zc3zc3ERRORze3ze3zd2action_229zd2;
    var BgL_sc_zc3zc3EOFze3ze3zd2action_230zd2;
    var counters;
    {
      (counters = (tables[(0)]));
      (BgL_sc_zc3zc3EOFze3ze3zd2action_230zd2 = (tables[(1)]));
      (BgL_sc_zc3zc3ERRORze3ze3zd2action_229zd2 = (tables[(2)]));
      (BgL_sc_ruleszd2actions_228zd2 = (tables[(3)]));
      (BgL_sc_nlzd2start_227zd2 = (tables[(5)]));
      (BgL_sc_nozd2nlzd2start_226z00 = (tables[(6)]));
      (BgL_sc_charcszd2v_225zd2 = (tables[(7)]));
      (BgL_sc_acczd2v_224zd2 = (tables[(8)]));
      (len = (BgL_sc_charcszd2v_225zd2.length));
      (v = ((0,sc_makeVector)(len)));
      (i = (len-(1)));
      while ((i>=(0))) {
        {
          (charcs = (BgL_sc_charcszd2v_225zd2[i]));
          sc_op_223 = function(charc) {
            var tail1483;
            var L1479;
            var tail1478;
            var L1474;
            var falseHead1482;
            var sc_op_231;
            var dest;
            var BgL_sc_rangezd2l_232zd2;
            var arc;
            var sc_class_233;
            var sc_loop_234;
            var BgL_sc_classzd2tmp_235zd2;
            var classes;
            var falseHead1477;
            var cl;
            var BgL_sc_inversezf3_236zf3;
            var sc_dest_237;
            var tcl;
            {
              (tcl = (charc.car));
              (sc_dest_237 = (charc.cdr));
              (BgL_sc_inversezf3_236zf3 = (tcl.car));
              (cl = (tcl.cdr));
              (falseHead1477 = (new sc_Pair(null, null)));
              (tail1478 = falseHead1477);
              (L1474 = cl);
              while (!(L1474 === null)) {
                {
                  (tail1478.cdr = (new sc_Pair(((0,BgL_sc_charzd2ze3class_5z31_clce_l)((L1474.car))), null)));
                  (tail1478 = (tail1478.cdr));
                  (L1474 = (L1474.cdr));
                }
              }
              (classes = (falseHead1477.cdr));
              (BgL_sc_classzd2tmp_235zd2 = ((0,BgL_sc_mergezd2sort_4zd2_clce_l)(classes, BgL_sc_finitezd2classzd2union_3z00_clce_l, null)));
              if ((BgL_sc_inversezf3_236zf3!== false))
                {
                  sc_loop_234 = function(c, start) {
                    var rend;
                    var rstart;
                    var r;
                    var c;
                    var start;
                    while (true) {
                      if ((c === null))
                        return ((0,sc_list)((new sc_Pair(start, "inf+"))));
                      else
                        {
                          (r = (c.car));
                          (rstart = (r.car));
                          (rend = (r.cdr));
                          if ((((0,BgL_sc_classzd2zc3_2z11_clce_l)(start, rstart))!== false))
                            return (new sc_Pair((new sc_Pair(start, (rstart-(1)))), ((0,sc_loop_234)(c, rstart))));
                          else
                            {
                              (c = (c.cdr));
                              (start = (rend+(1)));
                            }
                        }
                    }
                  };
                  (sc_class_233 = ((0,sc_loop_234)(BgL_sc_classzd2tmp_235zd2, "inf-")));
                }
              else
                (sc_class_233 = BgL_sc_classzd2tmp_235zd2);
              (arc = (new sc_Pair(sc_class_233, sc_dest_237)));
              (BgL_sc_rangezd2l_232zd2 = (arc.car));
              (dest = (arc.cdr));
              sc_op_231 = function(range) {
                return (new sc_Pair(range, dest));
              };
              (falseHead1482 = (new sc_Pair(null, null)));
              (tail1483 = falseHead1482);
              (L1479 = BgL_sc_rangezd2l_232zd2);
              while (!(L1479 === null)) {
                {
                  (tail1483.cdr = (new sc_Pair(((0,sc_op_231)((L1479.car))), null)));
                  (tail1483 = (tail1483.cdr));
                  (L1479 = (L1479.cdr));
                }
              }
              return (falseHead1482.cdr);
            }
          };
          (falseHead1487 = (new sc_Pair(null, null)));
          (tail1488 = falseHead1487);
          (L1484 = charcs);
          while (!(L1484 === null)) {
            {
              (tail1488.cdr = (new sc_Pair(((0,sc_op_223)((L1484.car))), null)));
              (tail1488 = (tail1488.cdr));
              (L1484 = (L1484.cdr));
            }
          }
          (BgL_sc_sharcszd2l_222zd2 = (falseHead1487.cdr));
          (BgL_sc_sortedzd2sharcs_221zd2 = ((0,BgL_sc_mergezd2sort_4zd2_clce_l)(BgL_sc_sharcszd2l_222zd2, BgL_sc_mergezd2sharcs_1zd2_clce_l, null)));
          (BgL_sc_fullzd2sharcs_219zd2 = ((sc_loop_220 = function(sharcs, start) {
            var t;
            var h;
            var sharc;
            return ((start==="inf+")?null:((sharcs === null)?(new sc_Pair((new sc_Pair((new sc_Pair(start, "inf+")), "err")), ((0,sc_loop_220)(sharcs, "inf+")))):((sharc = (sharcs.car)), (h = (sharc.car.car)), (t = (sharc.car.cdr)), ((((0,BgL_sc_classzd2zc3_2z11_clce_l)(start, h))!== false)?(new sc_Pair((new sc_Pair((new sc_Pair(start, (h-(1)))), "err")), ((0,sc_loop_220)(sharcs, h)))):(new sc_Pair(sharc, ((0,sc_loop_220)((sharcs.cdr), ((t==="inf+")?"inf+":(t+(1)))))))))));
          }), ((0,sc_loop_220)(BgL_sc_sortedzd2sharcs_221zd2, "inf-"))));
          op = function(sharc) {
            return (new sc_Pair((sharc.car.car), (sharc.cdr)));
          };
          (falseHead1492 = (new sc_Pair(null, null)));
          (tail1493 = falseHead1492);
          (L1489 = BgL_sc_fullzd2sharcs_219zd2);
          while (!(L1489 === null)) {
            {
              (tail1493.cdr = (new sc_Pair(((0,op)((L1489.car))), null)));
              (tail1493 = (tail1493.cdr));
              (L1489 = (L1489.cdr));
            }
          }
          (sc_optrOpnd_218 = (falseHead1492.cdr));
          (table = ((0,sc_list2vector)(sc_optrOpnd_218)));
          loop = function(left, right) {
            var mid;
            return ((left===right)?((table[left]).cdr):((mid = (parseInt((left+right+(1))/(2)))), ((((left+(2))===right)&&(((((table[mid]).car)+(1))===((table[right]).car))&&(((table[left]).cdr)===((table[right]).cdr))))?((0,sc_list)("=", ((table[mid]).car), ((table[mid]).cdr), ((table[left]).cdr))):((0,sc_list)(((table[mid]).car), ((0,loop)(left, (mid-(1)))), ((0,loop)(mid, right)))))));
          };
          (optrOpnd = ((0,loop)((0), ((table.length)-(1)))));
          (v[i] = optrOpnd);
          (i = (i-(1)));
        }
      }
      return ((0,BgL_lexerzd2makezd2treezd2lexerzd2)([counters, BgL_sc_zc3zc3EOFze3ze3zd2action_230zd2, BgL_sc_zc3zc3ERRORze3ze3zd2action_229zd2, BgL_sc_ruleszd2actions_228zd2, "decision-trees", BgL_sc_nlzd2start_227zd2, BgL_sc_nozd2nlzd2start_226z00, v, BgL_sc_acczd2v_224zd2], IS));
    }
  }));
  BgL_lexerzd2makezd2codezd2lexerzd2 = function(tables, IS) {
    var code;
    var BgL_sc_ruleszd2prezd2action_238z00;
    var BgL_sc_zc3zc3ERRORze3ze3zd2prezd2action_239z00;
    var BgL_sc_zc3zc3EOFze3ze3zd2prezd2action_240z00;
    return ((BgL_sc_zc3zc3EOFze3ze3zd2prezd2action_240z00 = (tables[(1)])), (BgL_sc_zc3zc3ERRORze3ze3zd2prezd2action_239z00 = (tables[(2)])), (BgL_sc_ruleszd2prezd2action_238z00 = (tables[(3)])), (code = (tables[(5)])), ((0,code)(BgL_sc_zc3zc3EOFze3ze3zd2prezd2action_240z00, BgL_sc_zc3zc3ERRORze3ze3zd2prezd2action_239z00, BgL_sc_ruleszd2prezd2action_238z00, IS)));
  };
  BgL_lexerzd2makezd2lexerz00 = function(tables, IS) {
    var BgL_sc_automatonzd2type_241zd2;
    return ((BgL_sc_automatonzd2type_241zd2 = (tables[(4)])), ((BgL_sc_automatonzd2type_241zd2==="decision-trees")?((0,BgL_lexerzd2makezd2treezd2lexerzd2)(tables, IS)):((BgL_sc_automatonzd2type_241zd2==="tagged-chars-lists")?((0,BgL_lexerzd2makezd2charzd2lexerzd2)(tables, IS)):((BgL_sc_automatonzd2type_241zd2==="code")?((0,BgL_lexerzd2makezd2codezd2lexerzd2)(tables, IS)):false))));
  };
  (BgL_lexerzd2defaultzd2tablez00 = ["line", function(yycontinue, yygetc, yyungetc) {
    return function(yytext, yyline) {
      return "*EOI*-tok";
    };
  }, function(yycontinue, yygetc, yyungetc) {
    return function(yytext, yyline) {
      return ((0,BgL_lexerzd2errorzd2)());
    };
  }, [false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return ((0,yycontinue)());
    };
  }, true, function(yycontinue, yygetc, yyungetc) {
    return function(yytext, yyline) {
      return (new sc_Pair("NUMBER-tok", ((0,sc_string2number_mutable)(yytext))));
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return ((0,yycontinue)());
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "NOT-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "AND-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "EITHER-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "OR-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "NEITHER-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "NOR-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "IF-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "THEN-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "A-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "AN-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "SOME-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "SOMETHING-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "SOMEONE-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "FOR-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "EVERY-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "EVERYTHING-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "EVERYONE-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "NO-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "NOTHING-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "ONE-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "WHO-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "WHAT-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "WHEN-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "WHICH-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "IS-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "HAS-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "HAVE-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "DOES-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "THAT-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "THE-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "NO_ONE-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "NONE-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "OTHERS-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "NOTHING-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "ELSE-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "OF-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "THAN-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "AS-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "THERE-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "SUCH-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "ONLY-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "FÁLSE-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "IT-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "TRUE-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "DECLARE-tok";
    };
  }, true, function(yycontinue, yygetc, yyungetc) {
    return function(yytext, yyline) {
      return (new sc_Pair("NAME-tok", yytext));
    };
  }, true, function(yycontinue, yygetc, yyungetc) {
    return function(yytext, yyline) {
      return (new sc_Pair("CHARSTRING-tok", yytext));
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "LPAREN-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "RPAREN-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "COMMA-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "ELLIPSIS-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "PERIOD-tok";
    };
  }, false, function(yycontinue, yygetc, yyungetc) {
    return function(yyline) {
      return "QUESTIONMARK-tok";
    };
  }, true, function(yycontinue, yygetc, yyungetc) {
    return function(yytext, yyline) {
      return (new sc_Pair("VARIABLE-tok", yytext));
    };
  }, true, function(yycontinue, yygetc, yyungetc) {
    return function(yytext, yyline) {
      var f;
      return ((f = ((0,sc_assoc_mutable)(yytext, dictionary))), ((f!== false)?(new sc_Pair((f.cdr), (f.car))):((0,BgL_lexerzd2errorzd2)())));
    };
  }], "decision-trees", (0), (0), sc_const_6_clce_l, const_clce_l]);
  (lexer = false);
  (BgL_lexerzd2getzd2linez00 = false);
  (BgL_lexerzd2getczd2 = false);
  (BgL_lexerzd2ungetczd2 = false);
  BgL_lexerzd2initzd2 = function(BgL_sc_inputzd2type_242zd2, input) {
    var IS;
    return ((IS = ((0,BgL_lexerzd2makezd2ISz00)(BgL_sc_inputzd2type_242zd2, input, "line"))), (lexer = ((0,BgL_lexerzd2makezd2lexerz00)(BgL_lexerzd2defaultzd2tablez00, IS))), (BgL_lexerzd2getzd2linez00 = ((0,BgL_lexerzd2getzd2funczd2linezd2)(IS))), (BgL_lexerzd2getczd2 = ((0,BgL_lexerzd2getzd2funczd2getczd2)(IS))), (BgL_lexerzd2ungetczd2 = ((0,BgL_lexerzd2getzd2funczd2ungetczd2)(IS))));
  };
}
