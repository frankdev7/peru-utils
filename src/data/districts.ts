import type { IUbigeo } from '../@types';

const districts: Map<string, IUbigeo> = new Map();

// 01 - Amazonas
// 0101 - Chachapoyas
districts.set('010101', { code: '010101', name: 'Chachapoyas' });
districts.set('010102', { code: '010102', name: 'Asuncion' });
districts.set('010103', { code: '010103', name: 'Balsas' });
districts.set('010104', { code: '010104', name: 'Cheto' });
districts.set('010105', { code: '010105', name: 'Chiliquin' });
districts.set('010106', { code: '010106', name: 'Chuquibamba' });
districts.set('010107', { code: '010107', name: 'Granada' });
districts.set('010108', { code: '010108', name: 'Huancas' });
districts.set('010109', { code: '010109', name: 'La Jalca' });
districts.set('010110', { code: '010110', name: 'Leimebamba' });
districts.set('010111', { code: '010111', name: 'Levanto' });
districts.set('010112', { code: '010112', name: 'Magdalena' });
districts.set('010113', { code: '010113', name: 'Mariscal Castilla' });
districts.set('010114', { code: '010114', name: 'Molinopampa' });
districts.set('010115', { code: '010115', name: 'Montevideo' });
districts.set('010116', { code: '010116', name: 'Olleros' });
districts.set('010117', { code: '010117', name: 'Quinjalca' });
districts.set('010118', { code: '010118', name: 'San Francisco de Daguas' });
districts.set('010119', { code: '010119', name: 'San Isidro de Maino' });
districts.set('010120', { code: '010120', name: 'Soloco' });
districts.set('010121', { code: '010121', name: 'Sonche' });
// 0102 - Bagua
districts.set('010201', { code: '010201', name: 'Bagua' });
districts.set('010202', { code: '010202', name: 'Aramango' });
districts.set('010203', { code: '010203', name: 'Copallin' });
districts.set('010204', { code: '010204', name: 'El Parco' });
districts.set('010205', { code: '010205', name: 'Imaza' });
districts.set('010206', { code: '010206', name: 'La Peca' });
// 0103 - Bongara
districts.set('010301', { code: '010301', name: 'Jumbilla' });
districts.set('010302', { code: '010302', name: 'Chisquilla' });
districts.set('010303', { code: '010303', name: 'Churuja' });
districts.set('010304', { code: '010304', name: 'Corosha' });
districts.set('010305', { code: '010305', name: 'Cuispes' });
districts.set('010306', { code: '010306', name: 'Florida' });
districts.set('010307', { code: '010307', name: 'Jazan' });
districts.set('010308', { code: '010308', name: 'Recta' });
districts.set('010309', { code: '010309', name: 'San Carlos' });
districts.set('010310', { code: '010310', name: 'Shipasbamba' });
districts.set('010311', { code: '010311', name: 'Valera' });
districts.set('010312', { code: '010312', name: 'Yambrasbamba' });
// 0104 - Condorcanqui
districts.set('010401', { code: '010401', name: 'Nieva' });
districts.set('010402', { code: '010402', name: 'El Cenepa' });
districts.set('010403', { code: '010403', name: 'Rio Santiago' });
// 0105 - Luya
districts.set('010501', { code: '010501', name: 'Lamud' });
districts.set('010502', { code: '010502', name: 'Camporredondo' });
districts.set('010503', { code: '010503', name: 'Cocabamba' });
districts.set('010504', { code: '010504', name: 'Colcamar' });
districts.set('010505', { code: '010505', name: 'Conila' });
districts.set('010506', { code: '010506', name: 'Inguilpata' });
districts.set('010507', { code: '010507', name: 'Longuita' });
districts.set('010508', { code: '010508', name: 'Lonya Chico' });
districts.set('010509', { code: '010509', name: 'Luya' });
districts.set('010510', { code: '010510', name: 'Luya Viejo' });
districts.set('010511', { code: '010511', name: 'Maria' });
districts.set('010512', { code: '010512', name: 'Ocalli' });
districts.set('010513', { code: '010513', name: 'Ocumal' });
districts.set('010514', { code: '010514', name: 'Pisuquia' });
districts.set('010515', { code: '010515', name: 'Providencia' });
districts.set('010516', { code: '010516', name: 'San Cristobal' });
districts.set('010517', { code: '010517', name: 'San Francisco de Yeso' });
districts.set('010518', { code: '010518', name: 'San Jeronimo' });
districts.set('010519', { code: '010519', name: 'San Juan de Lopecancha' });
districts.set('010520', { code: '010520', name: 'Santa Catalina' });
districts.set('010521', { code: '010521', name: 'Santo Tomas' });
districts.set('010522', { code: '010522', name: 'Tingo' });
districts.set('010523', { code: '010523', name: 'Trita' });
// 0106 - Rodriguez de Mendoza
districts.set('010601', { code: '010601', name: 'San Nicolas' });
districts.set('010602', { code: '010602', name: 'Chirimoto' });
districts.set('010603', { code: '010603', name: 'Cochamal' });
districts.set('010604', { code: '010604', name: 'Huambo' });
districts.set('010605', { code: '010605', name: 'Limabamba' });
districts.set('010606', { code: '010606', name: 'Longar' });
districts.set('010607', { code: '010607', name: 'Mariscal Benavides' });
districts.set('010608', { code: '010608', name: 'Milpuc' });
districts.set('010609', { code: '010609', name: 'Omia' });
districts.set('010610', { code: '010610', name: 'Santa Rosa' });
districts.set('010611', { code: '010611', name: 'Totora' });
districts.set('010612', { code: '010612', name: 'Vista Alegre' });
// 0107 - Utcubamba
districts.set('010701', { code: '010701', name: 'Bagua Grande' });
districts.set('010702', { code: '010702', name: 'Cajaruro' });
districts.set('010703', { code: '010703', name: 'Cumba' });
districts.set('010704', { code: '010704', name: 'El Milagro' });
districts.set('010705', { code: '010705', name: 'Jamalca' });
districts.set('010706', { code: '010706', name: 'Lonya Grande' });
districts.set('010707', { code: '010707', name: 'Yamon' });
// 02 - Ancash
// 0201 - Huaraz
districts.set('020101', { code: '020101', name: 'Huaraz' });
districts.set('020102', { code: '020102', name: 'Cochabamba' });
districts.set('020103', { code: '020103', name: 'Colcabamba' });
districts.set('020104', { code: '020104', name: 'Huanchay' });
districts.set('020105', { code: '020105', name: 'Independencia' });
districts.set('020106', { code: '020106', name: 'Jangas' });
districts.set('020107', { code: '020107', name: 'La Libertad' });
districts.set('020108', { code: '020108', name: 'Olleros' });
districts.set('020109', { code: '020109', name: 'Pampas Grande' });
districts.set('020110', { code: '020110', name: 'Pariacoto' });
districts.set('020111', { code: '020111', name: 'Pira' });
districts.set('020112', { code: '020112', name: 'Tarica' });
// 0202 - Aija
districts.set('020201', { code: '020201', name: 'Aija' });
districts.set('020202', { code: '020202', name: 'Coris' });
districts.set('020203', { code: '020203', name: 'Huacllan' });
districts.set('020204', { code: '020204', name: 'La Merced' });
districts.set('020205', { code: '020205', name: 'Succha' });
// 0203 - Antonio Raymondi
districts.set('020301', { code: '020301', name: 'Llamellin' });
districts.set('020302', { code: '020302', name: 'Aczo' });
districts.set('020303', { code: '020303', name: 'Chaccho' });
districts.set('020304', { code: '020304', name: 'Chingas' });
districts.set('020305', { code: '020305', name: 'Mirgas' });
districts.set('020306', { code: '020306', name: 'San Juan de Rontoy' });
// 0204 - Asuncion
districts.set('020401', { code: '020401', name: 'Chacas' });
districts.set('020402', { code: '020402', name: 'Acochaca' });
// 0205 - Bolognesi
districts.set('020501', { code: '020501', name: 'Chiquian' });
districts.set('020502', { code: '020502', name: 'Abelardo Pardo Lezameta' });
districts.set('020503', { code: '020503', name: 'Antonio Raymondi' });
districts.set('020504', { code: '020504', name: 'Aquia' });
districts.set('020505', { code: '020505', name: 'Cajacay' });
districts.set('020506', { code: '020506', name: 'Canis' });
districts.set('020507', { code: '020507', name: 'Colquioc' });
districts.set('020508', { code: '020508', name: 'Huallanca' });
districts.set('020509', { code: '020509', name: 'Huasta' });
districts.set('020510', { code: '020510', name: 'Huayllacayan' });
districts.set('020511', { code: '020511', name: 'La Primavera' });
districts.set('020512', { code: '020512', name: 'Mangas' });
districts.set('020513', { code: '020513', name: 'Pacllon' });
districts.set('020514', { code: '020514', name: 'San Miguel de Corpanqui' });
districts.set('020515', { code: '020515', name: 'Ticllos' });
// 0206 - Carhuaz
districts.set('020601', { code: '020601', name: 'Carhuaz' });
districts.set('020602', { code: '020602', name: 'Acopampa' });
districts.set('020603', { code: '020603', name: 'Amashca' });
districts.set('020604', { code: '020604', name: 'Anta' });
districts.set('020605', { code: '020605', name: 'Ataquero' });
districts.set('020606', { code: '020606', name: 'Marcara' });
districts.set('020607', { code: '020607', name: 'Pariahuanca' });
districts.set('020608', { code: '020608', name: 'San Miguel de Aco' });
districts.set('020609', { code: '020609', name: 'Shilla' });
districts.set('020610', { code: '020610', name: 'Tinco' });
districts.set('020611', { code: '020611', name: 'Yungar' });
// 0207 - Carlos Fermin Fitzcarrald
districts.set('020701', { code: '020701', name: 'San Luis' });
districts.set('020702', { code: '020702', name: 'San Nicolas' });
districts.set('020703', { code: '020703', name: 'Yauya' });
// 0208 - Casma
districts.set('020801', { code: '020801', name: 'Casma' });
districts.set('020802', { code: '020802', name: 'Buena Vista Alta' });
districts.set('020803', { code: '020803', name: 'Comandante Noel' });
districts.set('020804', { code: '020804', name: 'Yautan' });
// 0209 - Corongo
districts.set('020901', { code: '020901', name: 'Corongo' });
districts.set('020902', { code: '020902', name: 'Aco' });
districts.set('020903', { code: '020903', name: 'Bambas' });
districts.set('020904', { code: '020904', name: 'Cusca' });
districts.set('020905', { code: '020905', name: 'La Pampa' });
districts.set('020906', { code: '020906', name: 'Yanac' });
districts.set('020907', { code: '020907', name: 'Yupan' });
// 0210 - Huari
districts.set('021001', { code: '021001', name: 'Huari' });
districts.set('021002', { code: '021002', name: 'Anra' });
districts.set('021003', { code: '021003', name: 'Cajay' });
districts.set('021004', { code: '021004', name: 'Chavin de Huantar' });
districts.set('021005', { code: '021005', name: 'Huacachi' });
districts.set('021006', { code: '021006', name: 'Huacchis' });
districts.set('021007', { code: '021007', name: 'Huachis' });
districts.set('021008', { code: '021008', name: 'Huantar' });
districts.set('021009', { code: '021009', name: 'Masin' });
districts.set('021010', { code: '021010', name: 'Paucas' });
districts.set('021011', { code: '021011', name: 'Ponto' });
districts.set('021012', { code: '021012', name: 'Rahuapampa' });
districts.set('021013', { code: '021013', name: 'Rapayan' });
districts.set('021014', { code: '021014', name: 'San Marcos' });
districts.set('021015', { code: '021015', name: 'San Pedro de Chana' });
districts.set('021016', { code: '021016', name: 'Uco' });
// 0211 - Huarmey
districts.set('021101', { code: '021101', name: 'Huarmey' });
districts.set('021102', { code: '021102', name: 'Cochapeti' });
districts.set('021103', { code: '021103', name: 'Culebras' });
districts.set('021104', { code: '021104', name: 'Huayan' });
districts.set('021105', { code: '021105', name: 'Malvas' });
// 0212 - Huaylas
districts.set('021201', { code: '021201', name: 'Caraz' });
districts.set('021202', { code: '021202', name: 'Huallanca' });
districts.set('021203', { code: '021203', name: 'Huata' });
districts.set('021204', { code: '021204', name: 'Huaylas' });
districts.set('021205', { code: '021205', name: 'Mato' });
districts.set('021206', { code: '021206', name: 'Pamparomas' });
districts.set('021207', { code: '021207', name: 'Pueblo Libre' });
districts.set('021208', { code: '021208', name: 'Santa Cruz' });
districts.set('021209', { code: '021209', name: 'Santo Toribio' });
districts.set('021210', { code: '021210', name: 'Yuracmarca' });
// 0213 - Mariscal Luzuriaga
districts.set('021301', { code: '021301', name: 'Piscobamba' });
districts.set('021302', { code: '021302', name: 'Casca' });
districts.set('021303', { code: '021303', name: 'Eleazar Guzman Barron' });
districts.set('021304', { code: '021304', name: 'Fidel Olivas Escudero' });
districts.set('021305', { code: '021305', name: 'Llama' });
districts.set('021306', { code: '021306', name: 'Llumpa' });
districts.set('021307', { code: '021307', name: 'Lucma' });
districts.set('021308', { code: '021308', name: 'Musga' });
// 0214 - Ocros
districts.set('021401', { code: '021401', name: 'Ocros' });
districts.set('021402', { code: '021402', name: 'Acas' });
districts.set('021403', { code: '021403', name: 'Cajamarquilla' });
districts.set('021404', { code: '021404', name: 'Carhuapampa' });
districts.set('021405', { code: '021405', name: 'Cochas' });
districts.set('021406', { code: '021406', name: 'Congas' });
districts.set('021407', { code: '021407', name: 'Llipa' });
districts.set('021408', { code: '021408', name: 'San Cristobal de Rajan' });
districts.set('021409', { code: '021409', name: 'San Pedro' });
districts.set('021410', { code: '021410', name: 'Santiago de Chilcas' });
// 0215 - Pallasca
districts.set('021501', { code: '021501', name: 'Cabana' });
districts.set('021502', { code: '021502', name: 'Bolognesi' });
districts.set('021503', { code: '021503', name: 'Conchucos' });
districts.set('021504', { code: '021504', name: 'Huacaschuque' });
districts.set('021505', { code: '021505', name: 'Huandoval' });
districts.set('021506', { code: '021506', name: 'Lacabamba' });
districts.set('021507', { code: '021507', name: 'Llapo' });
districts.set('021508', { code: '021508', name: 'Pallasca' });
districts.set('021509', { code: '021509', name: 'Pampas' });
districts.set('021510', { code: '021510', name: 'Santa Rosa' });
districts.set('021511', { code: '021511', name: 'Tauca' });
// 0216 - Pomabamba
districts.set('021601', { code: '021601', name: 'Pomabamba' });
districts.set('021602', { code: '021602', name: 'Huayllan' });
districts.set('021603', { code: '021603', name: 'Parobamba' });
districts.set('021604', { code: '021604', name: 'Quinuabamba' });
// 0217 - Recuay
districts.set('021701', { code: '021701', name: 'Recuay' });
districts.set('021702', { code: '021702', name: 'Catac' });
districts.set('021703', { code: '021703', name: 'Cotaparaco' });
districts.set('021704', { code: '021704', name: 'Huayllapampa' });
districts.set('021705', { code: '021705', name: 'Llacllin' });
districts.set('021706', { code: '021706', name: 'Marca' });
districts.set('021707', { code: '021707', name: 'Pampas Chico' });
districts.set('021708', { code: '021708', name: 'Pararin' });
districts.set('021709', { code: '021709', name: 'Tapacocha' });
districts.set('021710', { code: '021710', name: 'Ticapampa' });
// 0218 - Santa
districts.set('021801', { code: '021801', name: 'Chimbote' });
districts.set('021802', { code: '021802', name: 'Caceres del Peru' });
districts.set('021803', { code: '021803', name: 'Coishco' });
districts.set('021804', { code: '021804', name: 'Macate' });
districts.set('021805', { code: '021805', name: 'Moro' });
districts.set('021806', { code: '021806', name: 'Nepeña' });
districts.set('021807', { code: '021807', name: 'Samanco' });
districts.set('021808', { code: '021808', name: 'Santa' });
districts.set('021809', { code: '021809', name: 'Nuevo Chimbote' });
// 0219 - Sihuas
districts.set('021901', { code: '021901', name: 'Sihuas' });
districts.set('021902', { code: '021902', name: 'Acobamba' });
districts.set('021903', { code: '021903', name: 'Alfonso Ugarte' });
districts.set('021904', { code: '021904', name: 'Cashapampa' });
districts.set('021905', { code: '021905', name: 'Chingalpo' });
districts.set('021906', { code: '021906', name: 'Huayllabamba' });
districts.set('021907', { code: '021907', name: 'Quiches' });
districts.set('021908', { code: '021908', name: 'Ragash' });
districts.set('021909', { code: '021909', name: 'San Juan' });
districts.set('021910', { code: '021910', name: 'Sicsibamba' });
// 0220 - Yungay
districts.set('022001', { code: '022001', name: 'Yungay' });
districts.set('022002', { code: '022002', name: 'Cascapara' });
districts.set('022003', { code: '022003', name: 'Mancos' });
districts.set('022004', { code: '022004', name: 'Matacoto' });
districts.set('022005', { code: '022005', name: 'Quillo' });
districts.set('022006', { code: '022006', name: 'Ranrahirca' });
districts.set('022007', { code: '022007', name: 'Shupluy' });
districts.set('022008', { code: '022008', name: 'Yanama' });
// 03 - Apurimac
// 0301 - Abancay
districts.set('030101', { code: '030101', name: 'Abancay' });
districts.set('030102', { code: '030102', name: 'Chacoche' });
districts.set('030103', { code: '030103', name: 'Circa' });
districts.set('030104', { code: '030104', name: 'Curahuasi' });
districts.set('030105', { code: '030105', name: 'Huanipaca' });
districts.set('030106', { code: '030106', name: 'Lambrama' });
districts.set('030107', { code: '030107', name: 'Pichirhua' });
districts.set('030108', { code: '030108', name: 'San Pedro de Cachora' });
districts.set('030109', { code: '030109', name: 'Tamburco' });
// 0302 - Andahuaylas
districts.set('030201', { code: '030201', name: 'Andahuaylas' });
districts.set('030202', { code: '030202', name: 'Andarapa' });
districts.set('030203', { code: '030203', name: 'Chiara' });
districts.set('030204', { code: '030204', name: 'Huancarama' });
districts.set('030205', { code: '030205', name: 'Huancaray' });
districts.set('030206', { code: '030206', name: 'Huayana' });
districts.set('030207', { code: '030207', name: 'Kishuara' });
districts.set('030208', { code: '030208', name: 'Pacobamba' });
districts.set('030209', { code: '030209', name: 'Pacucha' });
districts.set('030210', { code: '030210', name: 'Pampachiri' });
districts.set('030211', { code: '030211', name: 'Pomacocha' });
districts.set('030212', { code: '030212', name: 'San Antonio de Cachi' });
districts.set('030213', { code: '030213', name: 'San Jeronimo' });
districts.set('030214', { code: '030214', name: 'San Miguel de Chaccrampa' });
districts.set('030215', { code: '030215', name: 'Santa Maria de Chicmo' });
districts.set('030216', { code: '030216', name: 'Talavera' });
districts.set('030217', { code: '030217', name: 'Tumay Huaraca' });
districts.set('030218', { code: '030218', name: 'Turpo' });
districts.set('030219', { code: '030219', name: 'Kaquiabamba' });
districts.set('030220', { code: '030220', name: 'Jose Maria Arguedas' });
// 0303 - Antabamba
districts.set('030301', { code: '030301', name: 'Antabamba' });
districts.set('030302', { code: '030302', name: 'El Oro' });
districts.set('030303', { code: '030303', name: 'Huaquirca' });
districts.set('030304', { code: '030304', name: 'Juan Espinoza Medrano' });
districts.set('030305', { code: '030305', name: 'Oropesa' });
districts.set('030306', { code: '030306', name: 'Pachaconas' });
districts.set('030307', { code: '030307', name: 'Sabaino' });
// 0304 - Aymaraes
districts.set('030401', { code: '030401', name: 'Chalhuanca' });
districts.set('030402', { code: '030402', name: 'Capaya' });
districts.set('030403', { code: '030403', name: 'Caraybamba' });
districts.set('030404', { code: '030404', name: 'Chapimarca' });
districts.set('030405', { code: '030405', name: 'Colcabamba' });
districts.set('030406', { code: '030406', name: 'Cotaruse' });
districts.set('030407', { code: '030407', name: 'Ihuayllo' });
districts.set('030408', { code: '030408', name: 'Justo Apu Sahuaraura' });
districts.set('030409', { code: '030409', name: 'Lucre' });
districts.set('030410', { code: '030410', name: 'Pocohuanca' });
districts.set('030411', { code: '030411', name: 'San Juan de Chacña' });
districts.set('030412', { code: '030412', name: 'Sañayca' });
districts.set('030413', { code: '030413', name: 'Soraya' });
districts.set('030414', { code: '030414', name: 'Tapairihua' });
districts.set('030415', { code: '030415', name: 'Tintay' });
districts.set('030416', { code: '030416', name: 'Toraya' });
districts.set('030417', { code: '030417', name: 'Yanaca' });
// 0305 - Cotabambas
districts.set('030501', { code: '030501', name: 'Tambobamba' });
districts.set('030502', { code: '030502', name: 'Cotabambas' });
districts.set('030503', { code: '030503', name: 'Coyllurqui' });
districts.set('030504', { code: '030504', name: 'Haquira' });
districts.set('030505', { code: '030505', name: 'Mara' });
districts.set('030506', { code: '030506', name: 'Challhuahuacho' });
// 0306 - Chincheros
districts.set('030601', { code: '030601', name: 'Chincheros' });
districts.set('030602', { code: '030602', name: 'Anco_Huallo' });
districts.set('030603', { code: '030603', name: 'Cocharcas' });
districts.set('030604', { code: '030604', name: 'Huaccana' });
districts.set('030605', { code: '030605', name: 'Ocobamba' });
districts.set('030606', { code: '030606', name: 'Ongoy' });
districts.set('030607', { code: '030607', name: 'Uranmarca' });
districts.set('030608', { code: '030608', name: 'Ranracancha' });
districts.set('030609', { code: '030609', name: 'Rocchacc' });
districts.set('030610', { code: '030610', name: 'El Porvenir' });
// 0307 - Grau
districts.set('030701', { code: '030701', name: 'Chuquibambilla' });
districts.set('030702', { code: '030702', name: 'Curpahuasi' });
districts.set('030703', { code: '030703', name: 'Gamarra' });
districts.set('030704', { code: '030704', name: 'Huayllati' });
districts.set('030705', { code: '030705', name: 'Mamara' });
districts.set('030706', { code: '030706', name: 'Micaela Bastidas' });
districts.set('030707', { code: '030707', name: 'Pataypampa' });
districts.set('030708', { code: '030708', name: 'Progreso' });
districts.set('030709', { code: '030709', name: 'San Antonio' });
districts.set('030710', { code: '030710', name: 'Santa Rosa' });
districts.set('030711', { code: '030711', name: 'Turpay' });
districts.set('030712', { code: '030712', name: 'Vilcabamba' });
districts.set('030713', { code: '030713', name: 'Virundo' });
districts.set('030714', { code: '030714', name: 'Curasco' });
// 04 - Arequipa
// 0401 - Arequipa
districts.set('040101', { code: '040101', name: 'Arequipa' });
districts.set('040102', { code: '040102', name: 'Alto Selva Alegre' });
districts.set('040103', { code: '040103', name: 'Cayma' });
districts.set('040104', { code: '040104', name: 'Cerro Colorado' });
districts.set('040105', { code: '040105', name: 'Characato' });
districts.set('040106', { code: '040106', name: 'Chiguata' });
districts.set('040107', { code: '040107', name: 'Jacobo Hunter' });
districts.set('040108', { code: '040108', name: 'La Joya' });
districts.set('040109', { code: '040109', name: 'Mariano Melgar' });
districts.set('040110', { code: '040110', name: 'Miraflores' });
districts.set('040111', { code: '040111', name: 'Mollebaya' });
districts.set('040112', { code: '040112', name: 'Paucarpata' });
districts.set('040113', { code: '040113', name: 'Pocsi' });
districts.set('040114', { code: '040114', name: 'Polobaya' });
districts.set('040115', { code: '040115', name: 'Quequeña' });
districts.set('040116', { code: '040116', name: 'Sabandia' });
districts.set('040117', { code: '040117', name: 'Sachaca' });
districts.set('040118', { code: '040118', name: 'San Juan de Siguas' });
districts.set('040119', { code: '040119', name: 'San Juan de Tarucani' });
districts.set('040120', { code: '040120', name: 'Santa Isabel de Siguas' });
districts.set('040121', { code: '040121', name: 'Santa Rita de Siguas' });
districts.set('040122', { code: '040122', name: 'Socabaya' });
districts.set('040123', { code: '040123', name: 'Tiabaya' });
districts.set('040124', { code: '040124', name: 'Uchumayo' });
districts.set('040125', { code: '040125', name: 'Vitor' });
districts.set('040126', { code: '040126', name: 'Yanahuara' });
districts.set('040127', { code: '040127', name: 'Yarabamba' });
districts.set('040128', { code: '040128', name: 'Yura' });
districts.set('040129', {
  code: '040129',
  name: 'Jose Luis Bustamante Y Rivero',
});
// 0402 - Camana
districts.set('040201', { code: '040201', name: 'Camana' });
districts.set('040202', { code: '040202', name: 'Jose Maria Quimper' });
districts.set('040203', { code: '040203', name: 'Mariano Nicolas Valcarcel' });
districts.set('040204', { code: '040204', name: 'Mariscal Caceres' });
districts.set('040205', { code: '040205', name: 'Nicolas de Pierola' });
districts.set('040206', { code: '040206', name: 'Ocoña' });
districts.set('040207', { code: '040207', name: 'Quilca' });
districts.set('040208', { code: '040208', name: 'Samuel Pastor' });
// 0403 - Caraveli
districts.set('040301', { code: '040301', name: 'Caraveli' });
districts.set('040302', { code: '040302', name: 'Acari' });
districts.set('040303', { code: '040303', name: 'Atico' });
districts.set('040304', { code: '040304', name: 'Atiquipa' });
districts.set('040305', { code: '040305', name: 'Bella Union' });
districts.set('040306', { code: '040306', name: 'Cahuacho' });
districts.set('040307', { code: '040307', name: 'Chala' });
districts.set('040308', { code: '040308', name: 'Chaparra' });
districts.set('040309', { code: '040309', name: 'Huanuhuanu' });
districts.set('040310', { code: '040310', name: 'Jaqui' });
districts.set('040311', { code: '040311', name: 'Lomas' });
districts.set('040312', { code: '040312', name: 'Quicacha' });
districts.set('040313', { code: '040313', name: 'Yauca' });
// 0404 - Castilla
districts.set('040401', { code: '040401', name: 'Aplao' });
districts.set('040402', { code: '040402', name: 'Andagua' });
districts.set('040403', { code: '040403', name: 'Ayo' });
districts.set('040404', { code: '040404', name: 'Chachas' });
districts.set('040405', { code: '040405', name: 'Chilcaymarca' });
districts.set('040406', { code: '040406', name: 'Choco' });
districts.set('040407', { code: '040407', name: 'Huancarqui' });
districts.set('040408', { code: '040408', name: 'Machaguay' });
districts.set('040409', { code: '040409', name: 'Orcopampa' });
districts.set('040410', { code: '040410', name: 'Pampacolca' });
districts.set('040411', { code: '040411', name: 'Tipan' });
districts.set('040412', { code: '040412', name: 'Uñon' });
districts.set('040413', { code: '040413', name: 'Uraca' });
districts.set('040414', { code: '040414', name: 'Viraco' });
// 0405 - Caylloma
districts.set('040501', { code: '040501', name: 'Chivay' });
districts.set('040502', { code: '040502', name: 'Achoma' });
districts.set('040503', { code: '040503', name: 'Cabanaconde' });
districts.set('040504', { code: '040504', name: 'Callalli' });
districts.set('040505', { code: '040505', name: 'Caylloma' });
districts.set('040506', { code: '040506', name: 'Coporaque' });
districts.set('040507', { code: '040507', name: 'Huambo' });
districts.set('040508', { code: '040508', name: 'Huanca' });
districts.set('040509', { code: '040509', name: 'Ichupampa' });
districts.set('040510', { code: '040510', name: 'Lari' });
districts.set('040511', { code: '040511', name: 'Lluta' });
districts.set('040512', { code: '040512', name: 'Maca' });
districts.set('040513', { code: '040513', name: 'Madrigal' });
districts.set('040514', { code: '040514', name: 'San Antonio de Chuca' });
districts.set('040515', { code: '040515', name: 'Sibayo' });
districts.set('040516', { code: '040516', name: 'Tapay' });
districts.set('040517', { code: '040517', name: 'Tisco' });
districts.set('040518', { code: '040518', name: 'Tuti' });
districts.set('040519', { code: '040519', name: 'Yanque' });
districts.set('040520', { code: '040520', name: 'Majes' });
// 0406 - Condesuyos
districts.set('040601', { code: '040601', name: 'Chuquibamba' });
districts.set('040602', { code: '040602', name: 'Andaray' });
districts.set('040603', { code: '040603', name: 'Cayarani' });
districts.set('040604', { code: '040604', name: 'Chichas' });
districts.set('040605', { code: '040605', name: 'Iray' });
districts.set('040606', { code: '040606', name: 'Rio Grande' });
districts.set('040607', { code: '040607', name: 'Salamanca' });
districts.set('040608', { code: '040608', name: 'Yanaquihua' });
// 0407 - Islay
districts.set('040701', { code: '040701', name: 'Mollendo' });
districts.set('040702', { code: '040702', name: 'Cocachacra' });
districts.set('040703', { code: '040703', name: 'Dean Valdivia' });
districts.set('040704', { code: '040704', name: 'Islay' });
districts.set('040705', { code: '040705', name: 'Mejia' });
districts.set('040706', { code: '040706', name: 'Punta de Bombon' });
// 0408 - La Uniòn
districts.set('040801', { code: '040801', name: 'Cotahuasi' });
districts.set('040802', { code: '040802', name: 'Alca' });
districts.set('040803', { code: '040803', name: 'Charcana' });
districts.set('040804', { code: '040804', name: 'Huaynacotas' });
districts.set('040805', { code: '040805', name: 'Pampamarca' });
districts.set('040806', { code: '040806', name: 'Puyca' });
districts.set('040807', { code: '040807', name: 'Quechualla' });
districts.set('040808', { code: '040808', name: 'Sayla' });
districts.set('040809', { code: '040809', name: 'Tauria' });
districts.set('040810', { code: '040810', name: 'Tomepampa' });
districts.set('040811', { code: '040811', name: 'Toro' });
// 05 - Ayacucho
// 0501 - Huamanga
districts.set('050101', { code: '050101', name: 'Ayacucho' });
districts.set('050102', { code: '050102', name: 'Acocro' });
districts.set('050103', { code: '050103', name: 'Acos Vinchos' });
districts.set('050104', { code: '050104', name: 'Carmen Alto' });
districts.set('050105', { code: '050105', name: 'Chiara' });
districts.set('050106', { code: '050106', name: 'Ocros' });
districts.set('050107', { code: '050107', name: 'Pacaycasa' });
districts.set('050108', { code: '050108', name: 'Quinua' });
districts.set('050109', { code: '050109', name: 'San Jose de Ticllas' });
districts.set('050110', { code: '050110', name: 'San Juan Bautista' });
districts.set('050111', { code: '050111', name: 'Santiago de Pischa' });
districts.set('050112', { code: '050112', name: 'Socos' });
districts.set('050113', { code: '050113', name: 'Tambillo' });
districts.set('050114', { code: '050114', name: 'Vinchos' });
districts.set('050115', { code: '050115', name: 'Jesus Nazareno' });
districts.set('050116', {
  code: '050116',
  name: 'Andres Avelino Caceres Dorregaray',
});
// 0502 - Cangallo
districts.set('050201', { code: '050201', name: 'Cangallo' });
districts.set('050202', { code: '050202', name: 'Chuschi' });
districts.set('050203', { code: '050203', name: 'Los Morochucos' });
districts.set('050204', { code: '050204', name: 'Maria Parado de Bellido' });
districts.set('050205', { code: '050205', name: 'Paras' });
districts.set('050206', { code: '050206', name: 'Totos' });
// 0503 - Huanca Sancos
districts.set('050301', { code: '050301', name: 'Sancos' });
districts.set('050302', { code: '050302', name: 'Carapo' });
districts.set('050303', { code: '050303', name: 'Sacsamarca' });
districts.set('050304', { code: '050304', name: 'Santiago de Lucanamarca' });
// 0504 - Huanta
districts.set('050401', { code: '050401', name: 'Huanta' });
districts.set('050402', { code: '050402', name: 'Ayahuanco' });
districts.set('050403', { code: '050403', name: 'Huamanguilla' });
districts.set('050404', { code: '050404', name: 'Iguain' });
districts.set('050405', { code: '050405', name: 'Luricocha' });
districts.set('050406', { code: '050406', name: 'Santillana' });
districts.set('050407', { code: '050407', name: 'Sivia' });
districts.set('050408', { code: '050408', name: 'Llochegua' });
districts.set('050409', { code: '050409', name: 'Canayre' });
districts.set('050410', { code: '050410', name: 'Uchuraccay' });
districts.set('050411', { code: '050411', name: 'Pucacolpa' });
districts.set('050412', { code: '050412', name: 'Chaca' });
// 0505 - La Mar
districts.set('050501', { code: '050501', name: 'San Miguel' });
districts.set('050502', { code: '050502', name: 'Anco' });
districts.set('050503', { code: '050503', name: 'Ayna' });
districts.set('050504', { code: '050504', name: 'Chilcas' });
districts.set('050505', { code: '050505', name: 'Chungui' });
districts.set('050506', { code: '050506', name: 'Luis Carranza' });
districts.set('050507', { code: '050507', name: 'Santa Rosa' });
districts.set('050508', { code: '050508', name: 'Tambo' });
districts.set('050509', { code: '050509', name: 'Samugari' });
districts.set('050510', { code: '050510', name: 'Anchihuay' });
// 0506 - Lucanas
districts.set('050601', { code: '050601', name: 'Puquio' });
districts.set('050602', { code: '050602', name: 'Aucara' });
districts.set('050603', { code: '050603', name: 'Cabana' });
districts.set('050604', { code: '050604', name: 'Carmen Salcedo' });
districts.set('050605', { code: '050605', name: 'Chaviña' });
districts.set('050606', { code: '050606', name: 'Chipao' });
districts.set('050607', { code: '050607', name: 'Huac-Huas' });
districts.set('050608', { code: '050608', name: 'Laramate' });
districts.set('050609', { code: '050609', name: 'Leoncio Prado' });
districts.set('050610', { code: '050610', name: 'Llauta' });
districts.set('050611', { code: '050611', name: 'Lucanas' });
districts.set('050612', { code: '050612', name: 'Ocaña' });
districts.set('050613', { code: '050613', name: 'Otoca' });
districts.set('050614', { code: '050614', name: 'Saisa' });
districts.set('050615', { code: '050615', name: 'San Cristobal' });
districts.set('050616', { code: '050616', name: 'San Juan' });
districts.set('050617', { code: '050617', name: 'San Pedro' });
districts.set('050618', { code: '050618', name: 'San Pedro de Palco' });
districts.set('050619', { code: '050619', name: 'Sancos' });
districts.set('050620', { code: '050620', name: 'Santa Ana de Huaycahuacho' });
districts.set('050621', { code: '050621', name: 'Santa Lucia' });
// 0507 - Parinacochas
districts.set('050701', { code: '050701', name: 'Coracora' });
districts.set('050702', { code: '050702', name: 'Chumpi' });
districts.set('050703', { code: '050703', name: 'Coronel Castañeda' });
districts.set('050704', { code: '050704', name: 'Pacapausa' });
districts.set('050705', { code: '050705', name: 'Pullo' });
districts.set('050706', { code: '050706', name: 'Puyusca' });
districts.set('050707', { code: '050707', name: 'San Francisco de Ravacayco' });
districts.set('050708', { code: '050708', name: 'Upahuacho' });
// 0508 - Pàucar del Sara Sara
districts.set('050801', { code: '050801', name: 'Pausa' });
districts.set('050802', { code: '050802', name: 'Colta' });
districts.set('050803', { code: '050803', name: 'Corculla' });
districts.set('050804', { code: '050804', name: 'Lampa' });
districts.set('050805', { code: '050805', name: 'Marcabamba' });
districts.set('050806', { code: '050806', name: 'Oyolo' });
districts.set('050807', { code: '050807', name: 'Pararca' });
districts.set('050808', { code: '050808', name: 'San Javier de Alpabamba' });
districts.set('050809', { code: '050809', name: 'San Jose de Ushua' });
districts.set('050810', { code: '050810', name: 'Sara Sara' });
// 0509 - Sucre
districts.set('050901', { code: '050901', name: 'Querobamba' });
districts.set('050902', { code: '050902', name: 'Belen' });
districts.set('050903', { code: '050903', name: 'Chalcos' });
districts.set('050904', { code: '050904', name: 'Chilcayoc' });
districts.set('050905', { code: '050905', name: 'Huacaña' });
districts.set('050906', { code: '050906', name: 'Morcolla' });
districts.set('050907', { code: '050907', name: 'Paico' });
districts.set('050908', { code: '050908', name: 'San Pedro de Larcay' });
districts.set('050909', { code: '050909', name: 'San Salvador de Quije' });
districts.set('050910', { code: '050910', name: 'Santiago de Paucaray' });
districts.set('050911', { code: '050911', name: 'Soras' });
// 0510 - Victor Fajardo
districts.set('051001', { code: '051001', name: 'Huancapi' });
districts.set('051002', { code: '051002', name: 'Alcamenca' });
districts.set('051003', { code: '051003', name: 'Apongo' });
districts.set('051004', { code: '051004', name: 'Asquipata' });
districts.set('051005', { code: '051005', name: 'Canaria' });
districts.set('051006', { code: '051006', name: 'Cayara' });
districts.set('051007', { code: '051007', name: 'Colca' });
districts.set('051008', { code: '051008', name: 'Huamanquiquia' });
districts.set('051009', { code: '051009', name: 'Huancaraylla' });
districts.set('051010', { code: '051010', name: 'Huaya' });
districts.set('051011', { code: '051011', name: 'Sarhua' });
districts.set('051012', { code: '051012', name: 'Vilcanchos' });
// 0511 - Vilcas Huaman
districts.set('051101', { code: '051101', name: 'Vilcas Huaman' });
districts.set('051102', { code: '051102', name: 'Accomarca' });
districts.set('051103', { code: '051103', name: 'Carhuanca' });
districts.set('051104', { code: '051104', name: 'Concepcion' });
districts.set('051105', { code: '051105', name: 'Huambalpa' });
districts.set('051106', { code: '051106', name: 'Independencia' });
districts.set('051107', { code: '051107', name: 'Saurama' });
districts.set('051108', { code: '051108', name: 'Vischongo' });
// 06 - Cajamarca
// 0601 - Cajamarca
districts.set('060101', { code: '060101', name: 'Cajamarca' });
districts.set('060102', { code: '060102', name: 'Asuncion' });
districts.set('060103', { code: '060103', name: 'Chetilla' });
districts.set('060104', { code: '060104', name: 'Cospan' });
districts.set('060105', { code: '060105', name: 'Encañada' });
districts.set('060106', { code: '060106', name: 'Jesus' });
districts.set('060107', { code: '060107', name: 'Llacanora' });
districts.set('060108', { code: '060108', name: 'Los Baños del Inca' });
districts.set('060109', { code: '060109', name: 'Magdalena' });
districts.set('060110', { code: '060110', name: 'Matara' });
districts.set('060111', { code: '060111', name: 'Namora' });
districts.set('060112', { code: '060112', name: 'San Juan' });
// 0602 - Cajabamba
districts.set('060201', { code: '060201', name: 'Cajabamba' });
districts.set('060202', { code: '060202', name: 'Cachachi' });
districts.set('060203', { code: '060203', name: 'Condebamba' });
districts.set('060204', { code: '060204', name: 'Sitacocha' });
// 0603 - Celendin
districts.set('060301', { code: '060301', name: 'Celendin' });
districts.set('060302', { code: '060302', name: 'Chumuch' });
districts.set('060303', { code: '060303', name: 'Cortegana' });
districts.set('060304', { code: '060304', name: 'Huasmin' });
districts.set('060305', { code: '060305', name: 'Jorge Chavez' });
districts.set('060306', { code: '060306', name: 'Jose Galvez' });
districts.set('060307', { code: '060307', name: 'Miguel Iglesias' });
districts.set('060308', { code: '060308', name: 'Oxamarca' });
districts.set('060309', { code: '060309', name: 'Sorochuco' });
districts.set('060310', { code: '060310', name: 'Sucre' });
districts.set('060311', { code: '060311', name: 'Utco' });
districts.set('060312', { code: '060312', name: 'La Libertad de Pallan' });
// 0604 - Chota
districts.set('060401', { code: '060401', name: 'Chota' });
districts.set('060402', { code: '060402', name: 'Anguia' });
districts.set('060403', { code: '060403', name: 'Chadin' });
districts.set('060404', { code: '060404', name: 'Chiguirip' });
districts.set('060405', { code: '060405', name: 'Chimban' });
districts.set('060406', { code: '060406', name: 'Choropampa' });
districts.set('060407', { code: '060407', name: 'Cochabamba' });
districts.set('060408', { code: '060408', name: 'Conchan' });
districts.set('060409', { code: '060409', name: 'Huambos' });
districts.set('060410', { code: '060410', name: 'Lajas' });
districts.set('060411', { code: '060411', name: 'Llama' });
districts.set('060412', { code: '060412', name: 'Miracosta' });
districts.set('060413', { code: '060413', name: 'Paccha' });
districts.set('060414', { code: '060414', name: 'Pion' });
districts.set('060415', { code: '060415', name: 'Querocoto' });
districts.set('060416', { code: '060416', name: 'San Juan de Licupis' });
districts.set('060417', { code: '060417', name: 'Tacabamba' });
districts.set('060418', { code: '060418', name: 'Tocmoche' });
districts.set('060419', { code: '060419', name: 'Chalamarca' });
// 0605 - Contumaza
districts.set('060501', { code: '060501', name: 'Contumaza' });
districts.set('060502', { code: '060502', name: 'Chilete' });
districts.set('060503', { code: '060503', name: 'Cupisnique' });
districts.set('060504', { code: '060504', name: 'Guzmango' });
districts.set('060505', { code: '060505', name: 'San Benito' });
districts.set('060506', { code: '060506', name: 'Santa Cruz de Toledo' });
districts.set('060507', { code: '060507', name: 'Tantarica' });
districts.set('060508', { code: '060508', name: 'Yonan' });
// 0606 - Cutervo
districts.set('060601', { code: '060601', name: 'Cutervo' });
districts.set('060602', { code: '060602', name: 'Callayuc' });
districts.set('060603', { code: '060603', name: 'Choros' });
districts.set('060604', { code: '060604', name: 'Cujillo' });
districts.set('060605', { code: '060605', name: 'La Ramada' });
districts.set('060606', { code: '060606', name: 'Pimpingos' });
districts.set('060607', { code: '060607', name: 'Querocotillo' });
districts.set('060608', { code: '060608', name: 'San Andres de Cutervo' });
districts.set('060609', { code: '060609', name: 'San Juan de Cutervo' });
districts.set('060610', { code: '060610', name: 'San Luis de Lucma' });
districts.set('060611', { code: '060611', name: 'Santa Cruz' });
districts.set('060612', { code: '060612', name: 'Santo Domingo de la Capilla' });
districts.set('060613', { code: '060613', name: 'Santo Tomas' });
districts.set('060614', { code: '060614', name: 'Socota' });
districts.set('060615', { code: '060615', name: 'Toribio Casanova' });
// 0607 - Hualgayoc
districts.set('060701', { code: '060701', name: 'Bambamarca' });
districts.set('060702', { code: '060702', name: 'Chugur' });
districts.set('060703', { code: '060703', name: 'Hualgayoc' });
// 0608 - Jaen
districts.set('060801', { code: '060801', name: 'Jaen' });
districts.set('060802', { code: '060802', name: 'Bellavista' });
districts.set('060803', { code: '060803', name: 'Chontali' });
districts.set('060804', { code: '060804', name: 'Colasay' });
districts.set('060805', { code: '060805', name: 'Huabal' });
districts.set('060806', { code: '060806', name: 'Las Pirias' });
districts.set('060807', { code: '060807', name: 'Pomahuaca' });
districts.set('060808', { code: '060808', name: 'Pucara' });
districts.set('060809', { code: '060809', name: 'Sallique' });
districts.set('060810', { code: '060810', name: 'San Felipe' });
districts.set('060811', { code: '060811', name: 'San Jose del Alto' });
districts.set('060812', { code: '060812', name: 'Santa Rosa' });
// 0609 - San Ignacio
districts.set('060901', { code: '060901', name: 'San Ignacio' });
districts.set('060902', { code: '060902', name: 'Chirinos' });
districts.set('060903', { code: '060903', name: 'Huarango' });
districts.set('060904', { code: '060904', name: 'La Coipa' });
districts.set('060905', { code: '060905', name: 'Namballe' });
districts.set('060906', { code: '060906', name: 'San Jose de Lourdes' });
districts.set('060907', { code: '060907', name: 'Tabaconas' });
// 0610 - San Marcos
districts.set('061001', { code: '061001', name: 'Pedro Galvez' });
districts.set('061002', { code: '061002', name: 'Chancay' });
districts.set('061003', { code: '061003', name: 'Eduardo Villanueva' });
districts.set('061004', { code: '061004', name: 'Gregorio Pita' });
districts.set('061005', { code: '061005', name: 'Ichocan' });
districts.set('061006', { code: '061006', name: 'Jose Manuel Quiroz' });
districts.set('061007', { code: '061007', name: 'Jose Sabogal' });
// 0611 - San Miguel
districts.set('061101', { code: '061101', name: 'San Miguel' });
districts.set('061102', { code: '061102', name: 'Bolivar' });
districts.set('061103', { code: '061103', name: 'Calquis' });
districts.set('061104', { code: '061104', name: 'Catilluc' });
districts.set('061105', { code: '061105', name: 'El Prado' });
districts.set('061106', { code: '061106', name: 'La Florida' });
districts.set('061107', { code: '061107', name: 'Llapa' });
districts.set('061108', { code: '061108', name: 'Nanchoc' });
districts.set('061109', { code: '061109', name: 'Niepos' });
districts.set('061110', { code: '061110', name: 'San Gregorio' });
districts.set('061111', { code: '061111', name: 'San Silvestre de Cochan' });
districts.set('061112', { code: '061112', name: 'Tongod' });
districts.set('061113', { code: '061113', name: 'Union Agua Blanca' });
// 0612 - San Pablo
districts.set('061201', { code: '061201', name: 'San Pablo' });
districts.set('061202', { code: '061202', name: 'San Bernardino' });
districts.set('061203', { code: '061203', name: 'San Luis' });
districts.set('061204', { code: '061204', name: 'Tumbaden' });
// 0613 - Santa Cruz
districts.set('061301', { code: '061301', name: 'Santa Cruz' });
districts.set('061302', { code: '061302', name: 'Andabamba' });
districts.set('061303', { code: '061303', name: 'Catache' });
districts.set('061304', { code: '061304', name: 'Chancaybaños' });
districts.set('061305', { code: '061305', name: 'La Esperanza' });
districts.set('061306', { code: '061306', name: 'Ninabamba' });
districts.set('061307', { code: '061307', name: 'Pulan' });
districts.set('061308', { code: '061308', name: 'Saucepampa' });
districts.set('061309', { code: '061309', name: 'Sexi' });
districts.set('061310', { code: '061310', name: 'Uticyacu' });
districts.set('061311', { code: '061311', name: 'Yauyucan' });
// 07 - Cusco
// 0701 - Cusco
districts.set('070101', { code: '070101', name: 'Cusco' });
districts.set('070102', { code: '070102', name: 'Ccorca' });
districts.set('070103', { code: '070103', name: 'Poroy' });
districts.set('070104', { code: '070104', name: 'San Jeronimo' });
districts.set('070105', { code: '070105', name: 'San Sebastian' });
districts.set('070106', { code: '070106', name: 'Santiago' });
districts.set('070107', { code: '070107', name: 'Saylla' });
districts.set('070108', { code: '070108', name: 'Wanchaq' });
// 0702 - Acomayo
districts.set('070201', { code: '070201', name: 'Acomayo' });
districts.set('070202', { code: '070202', name: 'Acopia' });
districts.set('070203', { code: '070203', name: 'Acos' });
districts.set('070204', { code: '070204', name: 'Mosoc Llacta' });
districts.set('070205', { code: '070205', name: 'Pomacanchi' });
districts.set('070206', { code: '070206', name: 'Rondocan' });
districts.set('070207', { code: '070207', name: 'Sangarara' });
// 0703 - Anta
districts.set('070301', { code: '070301', name: 'Anta' });
districts.set('070302', { code: '070302', name: 'Ancahuasi' });
districts.set('070303', { code: '070303', name: 'Cachimayo' });
districts.set('070304', { code: '070304', name: 'Chinchaypujio' });
districts.set('070305', { code: '070305', name: 'Huarocondo' });
districts.set('070306', { code: '070306', name: 'Limatambo' });
districts.set('070307', { code: '070307', name: 'Mollepata' });
districts.set('070308', { code: '070308', name: 'Pucyura' });
districts.set('070309', { code: '070309', name: 'Zurite' });
// 0704 - Calca
districts.set('070401', { code: '070401', name: 'Calca' });
districts.set('070402', { code: '070402', name: 'Coya' });
districts.set('070403', { code: '070403', name: 'Lamay' });
districts.set('070404', { code: '070404', name: 'Lares' });
districts.set('070405', { code: '070405', name: 'Pisac' });
districts.set('070406', { code: '070406', name: 'San Salvador' });
districts.set('070407', { code: '070407', name: 'Taray' });
districts.set('070408', { code: '070408', name: 'Yanatile' });
// 0705 - Canas
districts.set('070501', { code: '070501', name: 'Yanaoca' });
districts.set('070502', { code: '070502', name: 'Checca' });
districts.set('070503', { code: '070503', name: 'Kunturkanki' });
districts.set('070504', { code: '070504', name: 'Langui' });
districts.set('070505', { code: '070505', name: 'Layo' });
districts.set('070506', { code: '070506', name: 'Pampamarca' });
districts.set('070507', { code: '070507', name: 'Quehue' });
districts.set('070508', { code: '070508', name: 'Tupac Amaru' });
// 0706 - Canchis
districts.set('070601', { code: '070601', name: 'Sicuani' });
districts.set('070602', { code: '070602', name: 'Checacupe' });
districts.set('070603', { code: '070603', name: 'Combapata' });
districts.set('070604', { code: '070604', name: 'Marangani' });
districts.set('070605', { code: '070605', name: 'Pitumarca' });
districts.set('070606', { code: '070606', name: 'San Pablo' });
districts.set('070607', { code: '070607', name: 'San Pedro' });
districts.set('070608', { code: '070608', name: 'Tinta' });
// 0707 - Chumbivilcas
districts.set('070701', { code: '070701', name: 'Santo Tomas' });
districts.set('070702', { code: '070702', name: 'Capacmarca' });
districts.set('070703', { code: '070703', name: 'Chamaca' });
districts.set('070704', { code: '070704', name: 'Colquemarca' });
districts.set('070705', { code: '070705', name: 'Livitaca' });
districts.set('070706', { code: '070706', name: 'Llusco' });
districts.set('070707', { code: '070707', name: 'Quiñota' });
districts.set('070708', { code: '070708', name: 'Velille' });
// 0707 - Espinar
districts.set('070801', { code: '070801', name: 'Espinar' });
districts.set('070802', { code: '070802', name: 'Condoroma' });
districts.set('070803', { code: '070803', name: 'Coporaque' });
districts.set('070804', { code: '070804', name: 'Ocoruro' });
districts.set('070805', { code: '070805', name: 'Pallpata' });
districts.set('070806', { code: '070806', name: 'Pichigua' });
districts.set('070807', { code: '070807', name: 'Suyckutambo' });
districts.set('070808', { code: '070808', name: 'Alto Pichigua' });
// 0709 - La Convencion
districts.set('070901', { code: '070901', name: 'Santa Ana' });
districts.set('070902', { code: '070902', name: 'Echarate' });
districts.set('070903', { code: '070903', name: 'Huayopata' });
districts.set('070904', { code: '070904', name: 'Maranura' });
districts.set('070905', { code: '070905', name: 'Ocobamba' });
districts.set('070906', { code: '070906', name: 'Quellouno' });
districts.set('070907', { code: '070907', name: 'Kimbiri' });
districts.set('070908', { code: '070908', name: 'Santa Teresa' });
districts.set('070909', { code: '070909', name: 'Vilcabamba' });
districts.set('070910', { code: '070910', name: 'Pichari' });
districts.set('070911', { code: '070911', name: 'Inkawasi' });
districts.set('070912', { code: '070912', name: 'Villa Virgen' });
districts.set('070913', { code: '070913', name: 'Villa Kintiarina' });
// 0710 - Paruro
districts.set('071001', { code: '071001', name: 'Paruro' });
districts.set('071002', { code: '071002', name: 'Accha' });
districts.set('071003', { code: '071003', name: 'Ccapi' });
districts.set('071004', { code: '071004', name: 'Colcha' });
districts.set('071005', { code: '071005', name: 'Huanoquite' });
districts.set('071006', { code: '071006', name: 'Omacha' });
districts.set('071007', { code: '071007', name: 'Paccaritambo' });
districts.set('071008', { code: '071008', name: 'Pillpinto' });
districts.set('071009', { code: '071009', name: 'Yaurisque' });
// 0711 - Paucartambo
districts.set('071101', { code: '071101', name: 'Paucartambo' });
districts.set('071102', { code: '071102', name: 'Caicay' });
districts.set('071103', { code: '071103', name: 'Challabamba' });
districts.set('071104', { code: '071104', name: 'Colquepata' });
districts.set('071105', { code: '071105', name: 'Huancarani' });
districts.set('071106', { code: '071106', name: 'Kosñipata' });
// 0712 - Quispicanchi
districts.set('071201', { code: '071201', name: 'Urcos' });
districts.set('071202', { code: '071202', name: 'Andahuaylillas' });
districts.set('071203', { code: '071203', name: 'Camanti' });
districts.set('071204', { code: '071204', name: 'Ccarhuayo' });
districts.set('071205', { code: '071205', name: 'Ccatca' });
districts.set('071206', { code: '071206', name: 'Cusipata' });
districts.set('071207', { code: '071207', name: 'Huaro' });
districts.set('071208', { code: '071208', name: 'Lucre' });
districts.set('071209', { code: '071209', name: 'Marcapata' });
districts.set('071210', { code: '071210', name: 'Ocongate' });
districts.set('071211', { code: '071211', name: 'Oropesa' });
districts.set('071212', { code: '071212', name: 'Quiquijana' });
// 0713 - Urubamba
districts.set('071301', { code: '071301', name: 'Urubamba' });
districts.set('071302', { code: '071302', name: 'Chinchero' });
districts.set('071303', { code: '071303', name: 'Huayllabamba' });
districts.set('071304', { code: '071304', name: 'Machupicchu' });
districts.set('071305', { code: '071305', name: 'Maras' });
districts.set('071306', { code: '071306', name: 'Ollantaytambo' });
districts.set('071307', { code: '071307', name: 'Yucay' });
// 08 - Huancavelica
// 0801 - Huancavelica
districts.set('080101', { code: '080101', name: 'Huancavelica' });
districts.set('080102', { code: '080102', name: 'Acobambilla' });
districts.set('080103', { code: '080103', name: 'Acoria' });
districts.set('080104', { code: '080104', name: 'Conayca' });
districts.set('080105', { code: '080105', name: 'Cuenca' });
districts.set('080106', { code: '080106', name: 'Huachocolpa' });
districts.set('080107', { code: '080107', name: 'Huayllahuara' });
districts.set('080108', { code: '080108', name: 'Izcuchaca' });
districts.set('080109', { code: '080109', name: 'Laria' });
districts.set('080110', { code: '080110', name: 'Manta' });
districts.set('080111', { code: '080111', name: 'Mariscal Caceres' });
districts.set('080112', { code: '080112', name: 'Moya' });
districts.set('080113', { code: '080113', name: 'Nuevo Occoro' });
districts.set('080114', { code: '080114', name: 'Palca' });
districts.set('080115', { code: '080115', name: 'Pilchaca' });
districts.set('080116', { code: '080116', name: 'Vilca' });
districts.set('080117', { code: '080117', name: 'Yauli' });
districts.set('080118', { code: '080118', name: 'Ascension' });
districts.set('080119', { code: '080119', name: 'Huando' });
// 0802 - Acobamba
districts.set('080201', { code: '080201', name: 'Acobamba' });
districts.set('080202', { code: '080202', name: 'Andabamba' });
districts.set('080203', { code: '080203', name: 'Anta' });
districts.set('080204', { code: '080204', name: 'Caja' });
districts.set('080205', { code: '080205', name: 'Marcas' });
districts.set('080206', { code: '080206', name: 'Paucara' });
districts.set('080207', { code: '080207', name: 'Pomacocha' });
districts.set('080208', { code: '080208', name: 'Rosario' });
// 0803 - Angaraes
districts.set('080301', { code: '080301', name: 'Lircay' });
districts.set('080302', { code: '080302', name: 'Anchonga' });
districts.set('080303', { code: '080303', name: 'Callanmarca' });
districts.set('080304', { code: '080304', name: 'Ccochaccasa' });
districts.set('080305', { code: '080305', name: 'Chincho' });
districts.set('080306', { code: '080306', name: 'Congalla' });
districts.set('080307', { code: '080307', name: 'Huanca-Huanca' });
districts.set('080308', { code: '080308', name: 'Huayllay Grande' });
districts.set('080309', { code: '080309', name: 'Julcamarca' });
districts.set('080310', { code: '080310', name: 'San Antonio de Antaparco' });
districts.set('080311', { code: '080311', name: 'Santo Tomas de Pata' });
districts.set('080312', { code: '080312', name: 'Secclla' });
// 0804 - Castrovirreyna
districts.set('080401', { code: '080401', name: 'Castrovirreyna' });
districts.set('080402', { code: '080402', name: 'Arma' });
districts.set('080403', { code: '080403', name: 'Aurahua' });
districts.set('080404', { code: '080404', name: 'Capillas' });
districts.set('080405', { code: '080405', name: 'Chupamarca' });
districts.set('080406', { code: '080406', name: 'Cocas' });
districts.set('080407', { code: '080407', name: 'Huachos' });
districts.set('080408', { code: '080408', name: 'Huamatambo' });
districts.set('080409', { code: '080409', name: 'Mollepampa' });
districts.set('080410', { code: '080410', name: 'San Juan' });
districts.set('080411', { code: '080411', name: 'Santa Ana' });
districts.set('080412', { code: '080412', name: 'Tantara' });
districts.set('080413', { code: '080413', name: 'Ticrapo' });
// 0805 - Churcampa
districts.set('080501', { code: '080501', name: 'Churcampa' });
districts.set('080502', { code: '080502', name: 'Anco' });
districts.set('080503', { code: '080503', name: 'Chinchihuasi' });
districts.set('080504', { code: '080504', name: 'El Carmen' });
districts.set('080505', { code: '080505', name: 'La Merced' });
districts.set('080506', { code: '080506', name: 'Locroja' });
districts.set('080507', { code: '080507', name: 'Paucarbamba' });
districts.set('080508', { code: '080508', name: 'San Miguel de Mayocc' });
districts.set('080509', { code: '080509', name: 'San Pedro de Coris' });
districts.set('080510', { code: '080510', name: 'Pachamarca' });
districts.set('080511', { code: '080511', name: 'Cosme' });
// 0806 - Huaytara
districts.set('080601', { code: '080601', name: 'Huaytara' });
districts.set('080602', { code: '080602', name: 'Ayavi' });
districts.set('080603', { code: '080603', name: 'Cordova' });
districts.set('080604', { code: '080604', name: 'Huayacundo Arma' });
districts.set('080605', { code: '080605', name: 'Laramarca' });
districts.set('080606', { code: '080606', name: 'Ocoyo' });
districts.set('080607', { code: '080607', name: 'Pilpichaca' });
districts.set('080608', { code: '080608', name: 'Querco' });
districts.set('080609', { code: '080609', name: 'Quito-Arma' });
districts.set('080610', { code: '080610', name: 'San Antonio de Cusicancha' });
districts.set('080611', { code: '080611', name: 'San Francisco de Sangayaico' });
districts.set('080612', { code: '080612', name: 'San Isidro' });
districts.set('080613', { code: '080613', name: 'Santiago de Chocorvos' });
districts.set('080614', { code: '080614', name: 'Santiago de Quirahuara' });
districts.set('080615', { code: '080615', name: 'Santo Domingo de Capillas' });
districts.set('080616', { code: '080616', name: 'Tambo' });
// 0807 - Tayacaja
districts.set('080701', { code: '080701', name: 'Pampas' });
districts.set('080702', { code: '080702', name: 'Acostambo' });
districts.set('080703', { code: '080703', name: 'Acraquia' });
districts.set('080704', { code: '080704', name: 'Ahuaycha' });
districts.set('080705', { code: '080705', name: 'Colcabamba' });
districts.set('080706', { code: '080706', name: 'Daniel Hernandez' });
districts.set('080707', { code: '080707', name: 'Huachocolpa' });
districts.set('080709', { code: '080709', name: 'Huaribamba' });
districts.set('080710', { code: '080710', name: 'Ñahuimpuquio' });
districts.set('080711', { code: '080711', name: 'Pazos' });
districts.set('080713', { code: '080713', name: 'Quishuar' });
districts.set('080714', { code: '080714', name: 'Salcabamba' });
districts.set('080715', { code: '080715', name: 'Salcahuasi' });
districts.set('080716', { code: '080716', name: 'San Marcos de Rocchac' });
districts.set('080717', { code: '080717', name: 'Surcubamba' });
districts.set('080718', { code: '080718', name: 'Tintay Puncu' });
districts.set('080719', { code: '080719', name: 'Quichuas' });
districts.set('080720', { code: '080720', name: 'Andaymarca' });
districts.set('080721', { code: '080721', name: 'Roble' });
districts.set('080722', { code: '080722', name: 'Pichos' });
// 09 - Huanuco
// 0901 - Huanuco
districts.set('090101', { code: '090101', name: 'Huanuco' });
districts.set('090102', { code: '090102', name: 'Amarilis' });
districts.set('090103', { code: '090103', name: 'Chinchao' });
districts.set('090104', { code: '090104', name: 'Churubamba' });
districts.set('090105', { code: '090105', name: 'Margos' });
districts.set('090106', { code: '090106', name: 'Quisqui (Kichki)' });
districts.set('090107', { code: '090107', name: 'San Francisco de Cayran' });
districts.set('090108', { code: '090108', name: 'San Pedro de Chaulan' });
districts.set('090109', { code: '090109', name: 'Santa Maria del Valle' });
districts.set('090110', { code: '090110', name: 'Yarumayo' });
districts.set('090111', { code: '090111', name: 'Pillco Marca' });
districts.set('090112', { code: '090112', name: 'Yacus' });
districts.set('090113', { code: '090113', name: 'San Pablo de Pillao' });
// 0902 - Ambo
districts.set('090201', { code: '090201', name: 'Ambo' });
districts.set('090202', { code: '090202', name: 'Cayna' });
districts.set('090203', { code: '090203', name: 'Colpas' });
districts.set('090204', { code: '090204', name: 'Conchamarca' });
districts.set('090205', { code: '090205', name: 'Huacar' });
districts.set('090206', { code: '090206', name: 'San Francisco' });
districts.set('090207', { code: '090207', name: 'San Rafael' });
districts.set('090208', { code: '090208', name: 'Tomay Kichwa' });
// 0903 - Dos de Mayo
districts.set('090301', { code: '090301', name: 'La Union' });
districts.set('090307', { code: '090307', name: 'Chuquis' });
districts.set('090311', { code: '090311', name: 'Marias' });
districts.set('090313', { code: '090313', name: 'Pachas' });
districts.set('090316', { code: '090316', name: 'Quivilla' });
districts.set('090317', { code: '090317', name: 'Ripan' });
districts.set('090321', { code: '090321', name: 'Shunqui' });
districts.set('090322', { code: '090322', name: 'Sillapata' });
districts.set('090323', { code: '090323', name: 'Yanas' });
// 0904 - Huacaybamba
districts.set('090401', { code: '090401', name: 'Huacaybamba' });
districts.set('090402', { code: '090402', name: 'Canchabamba' });
districts.set('090403', { code: '090403', name: 'Cochabamba' });
districts.set('090404', { code: '090404', name: 'Pinra' });
// 0905 - Huamalies
districts.set('090501', { code: '090501', name: 'Llata' });
districts.set('090502', { code: '090502', name: 'Arancay' });
districts.set('090503', { code: '090503', name: 'Chavin de Pariarca' });
districts.set('090504', { code: '090504', name: 'Jacas Grande' });
districts.set('090505', { code: '090505', name: 'Jircan' });
districts.set('090506', { code: '090506', name: 'Miraflores' });
districts.set('090507', { code: '090507', name: 'Monzon' });
districts.set('090508', { code: '090508', name: 'Punchao' });
districts.set('090509', { code: '090509', name: 'Puños' });
districts.set('090510', { code: '090510', name: 'Singa' });
districts.set('090511', { code: '090511', name: 'Tantamayo' });
// 0906 - Leoncio Prado
districts.set('090601', { code: '090601', name: 'Rupa-Rupa' });
districts.set('090602', { code: '090602', name: 'Daniel Alomia Robles' });
districts.set('090603', { code: '090603', name: 'Hermilio Valdizan' });
districts.set('090604', { code: '090604', name: 'Jose Crespo y Castillo' });
districts.set('090605', { code: '090605', name: 'Luyando' });
districts.set('090606', { code: '090606', name: 'Mariano Damaso Beraun' });
districts.set('090607', { code: '090607', name: 'Pucayacu' });
districts.set('090608', { code: '090608', name: 'Castillo Grande' });
// 0907 - Marañon
districts.set('090701', { code: '090701', name: 'Huacrachuco' });
districts.set('090702', { code: '090702', name: 'Cholon' });
districts.set('090703', { code: '090703', name: 'San Buenaventura' });
districts.set('090704', { code: '090704', name: 'La Morada' });
districts.set('090705', {
  code: '090705',
  name: 'Santa Rosa de Alto Yanajanca',
});
// 0908 - Pachitea
districts.set('090801', { code: '090801', name: 'Panao' });
districts.set('090802', { code: '090802', name: 'Chaglla' });
districts.set('090803', { code: '090803', name: 'Molino' });
districts.set('090804', { code: '090804', name: 'Umari' });
// 0909 - Puerto Inca
districts.set('090901', { code: '090901', name: 'Puerto Inca' });
districts.set('090902', { code: '090902', name: 'Codo del Pozuzo' });
districts.set('090903', { code: '090903', name: 'Honoria' });
districts.set('090904', { code: '090904', name: 'Tournavista' });
districts.set('090905', { code: '090905', name: 'Yuyapichis' });
// 09 - Lauricocha
districts.set('091001', { code: '091001', name: 'Jesus' });
districts.set('091002', { code: '091002', name: 'Baños' });
districts.set('091003', { code: '091003', name: 'Jivia' });
districts.set('091004', { code: '091004', name: 'Queropalca' });
districts.set('091005', { code: '091005', name: 'Rondos' });
districts.set('091006', { code: '091006', name: 'San Francisco de Asis' });
districts.set('091007', { code: '091007', name: 'San Miguel de Cauri' });
// 0911 - Yarowilca
districts.set('091101', { code: '091101', name: 'Chavinillo' });
districts.set('091102', { code: '091102', name: 'Cahuac' });
districts.set('091103', { code: '091103', name: 'Chacabamba' });
districts.set('091104', { code: '091104', name: 'Aparicio Pomares' });
districts.set('091105', { code: '091105', name: 'Jacas Chico' });
districts.set('091106', { code: '091106', name: 'Obas' });
districts.set('091107', { code: '091107', name: 'Pampamarca' });
districts.set('091108', { code: '091108', name: 'Choras' });
// 10 - Ica
// 1001 - Ica
districts.set('100101', { code: '100101', name: 'Ica' });
districts.set('100102', { code: '100102', name: 'La Tinguiña' });
districts.set('100103', { code: '100103', name: 'Los Aquijes' });
districts.set('100104', { code: '100104', name: 'Ocucaje' });
districts.set('100105', { code: '100105', name: 'Pachacutec' });
districts.set('100106', { code: '100106', name: 'Parcona' });
districts.set('100107', { code: '100107', name: 'Pueblo Nuevo' });
districts.set('100108', { code: '100108', name: 'Salas' });
districts.set('100109', { code: '100109', name: 'San Jose de Los Molinos' });
districts.set('100110', { code: '100110', name: 'San Juan Bautista' });
districts.set('100111', { code: '100111', name: 'Santiago' });
districts.set('100112', { code: '100112', name: 'Subtanjalla' });
districts.set('100113', { code: '100113', name: 'Tate' });
districts.set('100114', { code: '100114', name: 'Yauca del Rosario' });
// 1002 - Chincha
districts.set('100201', { code: '100201', name: 'Chincha Alta' });
districts.set('100202', { code: '100202', name: 'Alto Laran' });
districts.set('100203', { code: '100203', name: 'Chavin' });
districts.set('100204', { code: '100204', name: 'Chincha Baja' });
districts.set('100205', { code: '100205', name: 'El Carmen' });
districts.set('100206', { code: '100206', name: 'Grocio Prado' });
districts.set('100207', { code: '100207', name: 'Pueblo Nuevo' });
districts.set('100208', { code: '100208', name: 'San Juan de Yanac' });
districts.set('100209', { code: '100209', name: 'San Pedro de Huacarpana' });
districts.set('100210', { code: '100210', name: 'Sunampe' });
districts.set('100211', { code: '100211', name: 'Tambo de Mora' });
// 1003 - Nasca
districts.set('100301', { code: '100301', name: 'Nasca' });
districts.set('100302', { code: '100302', name: 'Changuillo' });
districts.set('100303', { code: '100303', name: 'El Ingenio' });
districts.set('100304', { code: '100304', name: 'Marcona' });
districts.set('100305', { code: '100305', name: 'Vista Alegre' });
// 1004 - Palpa
districts.set('100401', { code: '100401', name: 'Palpa' });
districts.set('100402', { code: '100402', name: 'Llipata' });
districts.set('100403', { code: '100403', name: 'Rio Grande' });
districts.set('100404', { code: '100404', name: 'Santa Cruz' });
districts.set('100405', { code: '100405', name: 'Tibillo' });
// 1005 - Pisco
districts.set('100501', { code: '100501', name: 'Pisco' });
districts.set('100502', { code: '100502', name: 'Huancano' });
districts.set('100503', { code: '100503', name: 'Humay' });
districts.set('100504', { code: '100504', name: 'Independencia' });
districts.set('100505', { code: '100505', name: 'Paracas' });
districts.set('100506', { code: '100506', name: 'San Andres' });
districts.set('100507', { code: '100507', name: 'San Clemente' });
districts.set('100508', { code: '100508', name: 'Tupac Amaru Inca' });
// 11 - Junin
// 1101 - Huancayo
districts.set('110101', { code: '110101', name: 'Huancayo' });
districts.set('110104', { code: '110104', name: 'Carhuacallanga' });
districts.set('110105', { code: '110105', name: 'Chacapampa' });
districts.set('110106', { code: '110106', name: 'Chicche' });
districts.set('110107', { code: '110107', name: 'Chilca' });
districts.set('110108', { code: '110108', name: 'Chongos Alto' });
districts.set('110111', { code: '110111', name: 'Chupuro' });
districts.set('110112', { code: '110112', name: 'Colca' });
districts.set('110113', { code: '110113', name: 'Cullhuas' });
districts.set('110114', { code: '110114', name: 'El Tambo' });
districts.set('110116', { code: '110116', name: 'Huacrapuquio' });
districts.set('110117', { code: '110117', name: 'Hualhuas' });
districts.set('110119', { code: '110119', name: 'Huancan' });
districts.set('110120', { code: '110120', name: 'Huasicancha' });
districts.set('110121', { code: '110121', name: 'Huayucachi' });
districts.set('110122', { code: '110122', name: 'Ingenio' });
districts.set('110124', { code: '110124', name: 'Pariahuanca' });
districts.set('110115', { code: '110125', name: 'Pilcomayo' });
districts.set('110126', { code: '110126', name: 'Pucara' });
districts.set('110127', { code: '110127', name: 'Quichuay' });
districts.set('110128', { code: '110128', name: 'Quilcas' });
districts.set('110129', { code: '110129', name: 'San Agustin' });
districts.set('110130', { code: '110130', name: 'San Jeronimo de Tunan' });
districts.set('110132', { code: '110132', name: 'Saño' });
districts.set('110133', { code: '110133', name: 'Sapallanga' });
districts.set('110134', { code: '110134', name: 'Sicaya' });
districts.set('110135', { code: '110135', name: 'Santo Domingo de Acobamba' });
districts.set('110136', { code: '110136', name: 'Viques' });
// 1102 - Concepcion
districts.set('110201', { code: '110201', name: 'Concepcion' });
districts.set('110202', { code: '110202', name: 'Aco' });
districts.set('110203', { code: '110203', name: 'Andamarca' });
districts.set('110204', { code: '110204', name: 'Chambara' });
districts.set('110205', { code: '110205', name: 'Cochas' });
districts.set('110206', { code: '110206', name: 'Comas' });
districts.set('110207', { code: '110207', name: 'Heroinas Toledo' });
districts.set('110208', { code: '110208', name: 'Manzanares' });
districts.set('110209', { code: '110209', name: 'Mariscal Castilla' });
districts.set('110210', { code: '110210', name: 'Matahuasi' });
districts.set('110211', { code: '110211', name: 'Mito' });
districts.set('110212', { code: '110212', name: 'Nueve de Julio' });
districts.set('110213', { code: '110213', name: 'Orcotuna' });
districts.set('110214', { code: '110214', name: 'San Jose de Quero' });
districts.set('110215', { code: '110215', name: 'Santa Rosa de Ocopa' });
// 1103 - Chanchamayo
districts.set('110301', { code: '110301', name: 'Chanchamayo' });
districts.set('110302', { code: '110302', name: 'Perene' });
districts.set('110303', { code: '110303', name: 'Pichanaqui' });
districts.set('110304', { code: '110304', name: 'San Luis de Shuaro' });
districts.set('110305', { code: '110305', name: 'San Ramon' });
districts.set('110306', { code: '110306', name: 'Vitoc' });
// 1104 - Jauja
districts.set('110401', { code: '110401', name: 'Jauja' });
districts.set('110402', { code: '110402', name: 'Acolla' });
districts.set('110403', { code: '110403', name: 'Apata' });
districts.set('110404', { code: '110404', name: 'Ataura' });
districts.set('110405', { code: '110405', name: 'Canchayllo' });
districts.set('110406', { code: '110406', name: 'Curicaca' });
districts.set('110407', { code: '110407', name: 'El Mantaro' });
districts.set('110408', { code: '110408', name: 'Huamali' });
districts.set('110409', { code: '110409', name: 'Huaripampa' });
districts.set('110410', { code: '110410', name: 'Huertas' });
districts.set('110411', { code: '110411', name: 'Janjaillo' });
districts.set('110412', { code: '110412', name: 'Julcan' });
districts.set('110413', { code: '110413', name: 'Leonor Ordoñez' });
districts.set('110414', { code: '110414', name: 'Llocllapampa' });
districts.set('110415', { code: '110415', name: 'Marco' });
districts.set('110416', { code: '110416', name: 'Masma' });
districts.set('110417', { code: '110417', name: 'Masma Chicche' });
districts.set('110418', { code: '110418', name: 'Molinos' });
districts.set('110419', { code: '110419', name: 'Monobamba' });
districts.set('110420', { code: '110420', name: 'Muqui' });
districts.set('110421', { code: '110421', name: 'Muquiyauyo' });
districts.set('110422', { code: '110422', name: 'Paca' });
districts.set('110423', { code: '110423', name: 'Paccha' });
districts.set('110424', { code: '110424', name: 'Pancan' });
districts.set('110425', { code: '110425', name: 'Parco' });
districts.set('110426', { code: '110426', name: 'Pomacancha' });
districts.set('110427', { code: '110427', name: 'Ricran' });
districts.set('110428', { code: '110428', name: 'San Lorenzo' });
districts.set('110429', { code: '110429', name: 'San Pedro de Chunan' });
districts.set('110430', { code: '110430', name: 'Sausa' });
districts.set('110431', { code: '110431', name: 'Sincos' });
districts.set('110432', { code: '110432', name: 'Tunan Marca' });
districts.set('110433', { code: '110433', name: 'Yauli' });
districts.set('110434', { code: '110434', name: 'Yauyos' });
// 1105 - Junin
districts.set('110501', { code: '110501', name: 'Junin' });
districts.set('110502', { code: '110502', name: 'Carhuamayo' });
districts.set('110503', { code: '110503', name: 'Ondores' });
districts.set('110504', { code: '110504', name: 'Ulcumayo' });
// 1106 - Satipo
districts.set('110601', { code: '110601', name: 'Satipo' });
districts.set('110602', { code: '110602', name: 'Coviriali' });
districts.set('110603', { code: '110603', name: 'Llaylla' });
districts.set('110604', { code: '110604', name: 'Mazamari' });
districts.set('110605', { code: '110605', name: 'Pampa Hermosa' });
districts.set('110606', { code: '110606', name: 'Pangoa' });
districts.set('110607', { code: '110607', name: 'Rio Negro' });
districts.set('110608', { code: '110608', name: 'Rio Tambo' });
districts.set('110609', { code: '110609', name: 'Vizcatan del Ene' });
// 1107 - Tarma
districts.set('110701', { code: '110701', name: 'Tarma' });
districts.set('110702', { code: '110702', name: 'Acobamba' });
districts.set('110703', { code: '110703', name: 'Huaricolca' });
districts.set('110704', { code: '110704', name: 'Huasahuasi' });
districts.set('110705', { code: '110705', name: 'La Union' });
districts.set('110706', { code: '110706', name: 'Palca' });
districts.set('110707', { code: '110707', name: 'Palcamayo' });
districts.set('110708', { code: '110708', name: 'San Pedro de Cajas' });
districts.set('110709', { code: '110709', name: 'Tapo' });
// 1108 - Yauli
districts.set('110801', { code: '110801', name: 'La Oroya' });
districts.set('110802', { code: '110802', name: 'Chacapalpa' });
districts.set('110803', { code: '110803', name: 'Huay-Huay' });
districts.set('110804', { code: '110804', name: 'Marcapomacocha' });
districts.set('110805', { code: '110805', name: 'Morococha' });
districts.set('110806', { code: '110806', name: 'Paccha' });
districts.set('110807', {
  code: '110807',
  name: 'Santa Barbara de Carhuacayan',
});
districts.set('110808', { code: '110808', name: 'Santa Rosa de Sacco' });
districts.set('110809', { code: '110809', name: 'Suitucancha' });
districts.set('110810', { code: '110810', name: 'Yauli' });
// 1109 - Chupaca
districts.set('110901', { code: '110901', name: 'Chupaca' });
districts.set('110902', { code: '110902', name: 'Ahuac' });
districts.set('110903', { code: '110903', name: 'Chongos Bajo' });
districts.set('110904', { code: '110904', name: 'Huachac' });
districts.set('110905', { code: '110905', name: 'Huamancaca Chico' });
districts.set('110906', { code: '110906', name: 'San Juan de Iscos' });
districts.set('110907', { code: '110907', name: 'San Juan de Jarpa' });
districts.set('110908', { code: '110908', name: 'Tres de Diciembre' });
districts.set('110909', { code: '110909', name: 'Yanacancha' });
// 12 - La Libertad
// 1201 - Trujillo
districts.set('120101', { code: '120101', name: 'Trujillo' });
districts.set('120102', { code: '120102', name: 'El Porvenir' });
districts.set('120103', { code: '120103', name: 'Florencia de Mora' });
districts.set('120104', { code: '120104', name: 'Huanchaco' });
districts.set('120105', { code: '120105', name: 'La Esperanza' });
districts.set('120106', { code: '120106', name: 'Laredo' });
districts.set('120107', { code: '120107', name: 'Moche' });
districts.set('120108', { code: '120108', name: 'Poroto' });
districts.set('120109', { code: '120109', name: 'Salaverry' });
districts.set('120110', { code: '120110', name: 'Simbal' });
districts.set('120111', { code: '120111', name: 'Victor Larco Herrera' });
// 1202 - Ascope
districts.set('120201', { code: '120201', name: 'Ascope' });
districts.set('120202', { code: '120202', name: 'Chicama' });
districts.set('120203', { code: '120203', name: 'Chocope' });
districts.set('120204', { code: '120204', name: 'Magdalena de Cao' });
districts.set('120205', { code: '120205', name: 'Paijan' });
districts.set('120206', { code: '120206', name: 'Razuri' });
districts.set('120207', { code: '120207', name: 'Santiago de Cao' });
districts.set('120208', { code: '120208', name: 'Casa Grande' });
// 1203 - Bolivar
districts.set('120301', { code: '120301', name: 'Bolivar' });
districts.set('120302', { code: '120302', name: 'Bambamarca' });
districts.set('120303', { code: '120303', name: 'Condormarca' });
districts.set('120304', { code: '120304', name: 'Longotea' });
districts.set('120305', { code: '120305', name: 'Uchumarca' });
districts.set('120306', { code: '120306', name: 'Ucuncha' });
// 1204 - Chepen
districts.set('120401', { code: '120401', name: 'Chepen' });
districts.set('120402', { code: '120402', name: 'Pacanga' });
districts.set('120403', { code: '120403', name: 'Pueblo Nuevo' });
// 1205 - Julcan
districts.set('120501', { code: '120501', name: 'Julcan' });
districts.set('120502', { code: '120502', name: 'Calamarca' });
districts.set('120503', { code: '120503', name: 'Carabamba' });
districts.set('120504', { code: '120504', name: 'Huaso' });
// 1206 - Otuzco
districts.set('120601', { code: '120601', name: 'Otuzco' });
districts.set('120602', { code: '120602', name: 'Agallpampa' });
districts.set('120604', { code: '120604', name: 'Charat' });
districts.set('120605', { code: '120605', name: 'Huaranchal' });
districts.set('120606', { code: '120606', name: 'La Cuesta' });
districts.set('120608', { code: '120608', name: 'Mache' });
districts.set('120610', { code: '120610', name: 'Paranday' });
districts.set('120611', { code: '120611', name: 'Salpo' });
districts.set('120613', { code: '120613', name: 'Sinsicap' });
districts.set('120614', { code: '120614', name: 'Usquil' });
// 1207 - Pacasmayo
districts.set('120701', { code: '120701', name: 'San Pedro de Lloc' });
districts.set('120702', { code: '120702', name: 'Guadalupe' });
districts.set('120703', { code: '120703', name: 'Jequetepeque' });
districts.set('120704', { code: '120704', name: 'Pacasmayo' });
districts.set('120705', { code: '120705', name: 'San Jose' });
// 1208 - Pataz
districts.set('120801', { code: '120801', name: 'Tayabamba' });
districts.set('120802', { code: '120802', name: 'Buldibuyo' });
districts.set('120803', { code: '120803', name: 'Chillia' });
districts.set('120804', { code: '120804', name: 'Huancaspata' });
districts.set('120805', { code: '120805', name: 'Huaylillas' });
districts.set('120806', { code: '120806', name: 'Huayo' });
districts.set('120807', { code: '120807', name: 'Ongon' });
districts.set('120808', { code: '120808', name: 'Parcoy' });
districts.set('120809', { code: '120809', name: 'Pataz' });
districts.set('120810', { code: '120810', name: 'Pias' });
districts.set('120811', { code: '120811', name: 'Santiago de Challas' });
districts.set('120812', { code: '120812', name: 'Taurija' });
districts.set('120813', { code: '120813', name: 'Urpay' });
// 1209 - Sanchez Carr{code: chez Car, name:ion
districts.set('120901', { code: '120901', name: 'Huamachuco' });
districts.set('120902', { code: '120902', name: 'Chugay' });
districts.set('120903', { code: '120903', name: 'Cochorco' });
districts.set('120904', { code: '120904', name: 'Curgos' });
districts.set('120905', { code: '120905', name: 'Marcabal' });
districts.set('120906', { code: '120906', name: 'Sanagoran' });
districts.set('120907', { code: '120907', name: 'Sarin' });
districts.set('120908', { code: '120908', name: 'Sartimbamba' });
// 1210 - Santiago de {code: tiago de, name:Chuco
districts.set('121001', { code: '121001', name: 'Santiago de Chuco' });
districts.set('121002', { code: '121002', name: 'Angasmarca' });
districts.set('121003', { code: '121003', name: 'Cachicadan' });
districts.set('121004', { code: '121004', name: 'Mollebamba' });
districts.set('121005', { code: '121005', name: 'Mollepata' });
districts.set('121006', { code: '121006', name: 'Quiruvilca' });
districts.set('121007', { code: '121007', name: 'Santa Cruz de Chuca' });
districts.set('121008', { code: '121008', name: 'Sitabamba' });
// 1211 - Gran Chimu
districts.set('121101', { code: '121101', name: 'Cascas' });
districts.set('121102', { code: '121102', name: 'Lucma' });
districts.set('121103', { code: '121103', name: 'Marmot' });
districts.set('121104', { code: '121104', name: 'Sayapullo' });
// 1212 - Viru
districts.set('121201', { code: '121201', name: 'Viru' });
districts.set('121202', { code: '121202', name: 'Chao' });
districts.set('121203', { code: '121203', name: 'Guadalupito' });
// 13 - Lambayeque
// 1301 - Chiclayo
districts.set('130101', { code: '130101', name: 'Chiclayo' });
districts.set('130102', { code: '130102', name: 'Chongoyape' });
districts.set('130103', { code: '130103', name: 'Eten' });
districts.set('130104', { code: '130104', name: 'Eten Puerto' });
districts.set('130105', { code: '130105', name: 'Jose Leonardo Ortiz' });
districts.set('130106', { code: '130106', name: 'La Victoria' });
districts.set('130107', { code: '130107', name: 'Lagunas' });
districts.set('130108', { code: '130108', name: 'Monsefu' });
districts.set('130109', { code: '130109', name: 'Nueva Arica' });
districts.set('130110', { code: '130110', name: 'Oyotun' });
districts.set('130111', { code: '130111', name: 'Picsi' });
districts.set('130112', { code: '130112', name: 'Pimentel' });
districts.set('130113', { code: '130113', name: 'Reque' });
districts.set('130114', { code: '130114', name: 'Santa Rosa' });
districts.set('130115', { code: '130115', name: 'Saña' });
districts.set('130116', { code: '130116', name: 'Cayalti' });
districts.set('130117', { code: '130117', name: 'Patapo' });
districts.set('130118', { code: '130118', name: 'Pomalca' });
districts.set('130119', { code: '130119', name: 'Pucala' });
districts.set('130120', { code: '130120', name: 'Tuman' });
// 1302 - Ferreñafe
districts.set('130201', { code: '130201', name: 'Ferreñafe' });
districts.set('130202', { code: '130202', name: 'Cañaris' });
districts.set('130203', { code: '130203', name: 'Incahuasi' });
districts.set('130204', { code: '130204', name: 'Manuel Antonio Mesones Muro' });
districts.set('130205', { code: '130205', name: 'Pitipo' });
districts.set('130206', { code: '130206', name: 'Pueblo Nuevo' });
// 1303 - Lambayeque
districts.set('130301', { code: '130301', name: 'Lambayeque' });
districts.set('130302', { code: '130302', name: 'Chochope' });
districts.set('130303', { code: '130303', name: 'Illimo' });
districts.set('130304', { code: '130304', name: 'Jayanca' });
districts.set('130305', { code: '130305', name: 'Mochumi' });
districts.set('130306', { code: '130306', name: 'Morrope' });
districts.set('130307', { code: '130307', name: 'Motupe' });
districts.set('130308', { code: '130308', name: 'Olmos' });
districts.set('130309', { code: '130309', name: 'Pacora' });
districts.set('130310', { code: '130310', name: 'Salas' });
districts.set('130311', { code: '130311', name: 'San Jose' });
districts.set('130312', { code: '130312', name: 'Tucume' });
// 14 - Lima
// 1401 - Lima
districts.set('140101', { code: '140101', name: 'Lima' });
districts.set('140102', { code: '140102', name: 'Ancon' });
districts.set('140103', { code: '140103', name: 'Ate' });
districts.set('140104', { code: '140104', name: 'Barranco' });
districts.set('140105', { code: '140105', name: 'Breña' });
districts.set('140106', { code: '140106', name: 'Carabayllo' });
districts.set('140107', { code: '140107', name: 'Chaclacayo' });
districts.set('140108', { code: '140108', name: 'Chorrillos' });
districts.set('140109', { code: '140109', name: 'Cieneguilla' });
districts.set('140110', { code: '140110', name: 'Comas' });
districts.set('140111', { code: '140111', name: 'El Agustino' });
districts.set('140112', { code: '140112', name: 'Independencia' });
districts.set('140113', { code: '140113', name: 'Jesus Maria' });
districts.set('140114', { code: '140114', name: 'La Molina' });
districts.set('140115', { code: '140115', name: 'La Victoria' });
districts.set('140116', { code: '140116', name: 'Lince' });
districts.set('140117', { code: '140117', name: 'Los Olivos' });
districts.set('140118', { code: '140118', name: 'Lurigancho' });
districts.set('140119', { code: '140119', name: 'Lurin' });
districts.set('140120', { code: '140120', name: 'Magdalena del Mar' });
districts.set('140121', { code: '140121', name: 'Pueblo Libre' });
districts.set('140122', { code: '140122', name: 'Miraflores' });
districts.set('140123', { code: '140123', name: 'Pachacamac' });
districts.set('140124', { code: '140124', name: 'Pucusana' });
districts.set('140125', { code: '140125', name: 'Puente Piedra' });
districts.set('140126', { code: '140126', name: 'Punta Hermosa' });
districts.set('140127', { code: '140127', name: 'Punta Negra' });
districts.set('140128', { code: '140128', name: 'Rimac' });
districts.set('140129', { code: '140129', name: 'San Bartolo' });
districts.set('140130', { code: '140130', name: 'San Borja' });
districts.set('140131', { code: '140131', name: 'San Isidro' });
districts.set('140132', { code: '140132', name: 'San Juan de Lurigancho' });
districts.set('140133', { code: '140133', name: 'San Juan de Miraflores' });
districts.set('140134', { code: '140134', name: 'San Luis' });
districts.set('140135', { code: '140135', name: 'San Martin de Porres' });
districts.set('140136', { code: '140136', name: 'San Miguel' });
districts.set('140137', { code: '140137', name: 'Santa Anita' });
districts.set('140138', { code: '140138', name: 'Santa Maria del Mar' });
districts.set('140139', { code: '140139', name: 'Santa Rosa' });
districts.set('140140', { code: '140140', name: 'Santiago de Surco' });
districts.set('140141', { code: '140141', name: 'Surquillo' });
districts.set('140142', { code: '140142', name: 'Villa El Salvador' });
districts.set('140143', { code: '140143', name: 'Villa Maria del Triunfo' });
// 1402 - Barranca
districts.set('140201', { code: '140201', name: 'Barranca' });
districts.set('140202', { code: '140202', name: 'Paramonga' });
districts.set('140203', { code: '140203', name: 'Pativilca' });
districts.set('140204', { code: '140204', name: 'Supe' });
districts.set('140205', { code: '140205', name: 'Supe Puerto' });
// 1403 - Cajatambo
districts.set('140301', { code: '140301', name: 'Cajatambo' });
districts.set('140302', { code: '140302', name: 'Copa' });
districts.set('140303', { code: '140303', name: 'Gorgor' });
districts.set('140304', { code: '140304', name: 'Huancapon' });
districts.set('140305', { code: '140305', name: 'Manas' });
// 1404 - Canta
districts.set('140401', { code: '140401', name: 'Canta' });
districts.set('140402', { code: '140402', name: 'Arahuay' });
districts.set('140403', { code: '140403', name: 'Huamantanga' });
districts.set('140404', { code: '140404', name: 'Huaros' });
districts.set('140405', { code: '140405', name: 'Lachaqui' });
districts.set('140406', { code: '140406', name: 'San Buenaventura' });
districts.set('140407', { code: '140407', name: 'Santa Rosa de Quives' });
// 1405 - Cañete
districts.set('140501', { code: '140501', name: 'San Vicente de Cañete' });
districts.set('140502', { code: '140502', name: 'Asia' });
districts.set('140503', { code: '140503', name: 'Calango' });
districts.set('140504', { code: '140504', name: 'Cerro Azul' });
districts.set('140505', { code: '140505', name: 'Chilca' });
districts.set('140506', { code: '140506', name: 'Coayllo' });
districts.set('140507', { code: '140507', name: 'Imperial' });
districts.set('140508', { code: '140508', name: 'Lunahuana' });
districts.set('140509', { code: '140509', name: 'Mala' });
districts.set('140510', { code: '140510', name: 'Nuevo Imperial' });
districts.set('140511', { code: '140511', name: 'Pacaran' });
districts.set('140512', { code: '140512', name: 'Quilmana' });
districts.set('140513', { code: '140513', name: 'San Antonio' });
districts.set('140514', { code: '140514', name: 'San Luis' });
districts.set('140515', { code: '140515', name: 'Santa Cruz de Flores' });
districts.set('140516', { code: '140516', name: 'Zuñiga' });
// 1406 - Huaral
districts.set('140601', { code: '140601', name: 'Huaral' });
districts.set('140602', { code: '140602', name: 'Atavillos Alto' });
districts.set('140603', { code: '140603', name: 'Atavillos Bajo' });
districts.set('140604', { code: '140604', name: 'Aucallama' });
districts.set('140605', { code: '140605', name: 'Chancay' });
districts.set('140606', { code: '140606', name: 'Ihuari' });
districts.set('140607', { code: '140607', name: 'Lampian' });
districts.set('140608', { code: '140608', name: 'Pacaraos' });
districts.set('140609', { code: '140609', name: 'San Miguel de Acos' });
districts.set('140610', { code: '140610', name: 'Santa Cruz de Andamarca' });
districts.set('140611', { code: '140611', name: 'Sumbilca' });
districts.set('140612', { code: '140612', name: 'Veintisiete de Noviembre' });
// 1407 - Huarochiri
districts.set('140701', { code: '140701', name: 'Matucana' });
districts.set('140702', { code: '140702', name: 'Antioquia' });
districts.set('140703', { code: '140703', name: 'Callahuanca' });
districts.set('140704', { code: '140704', name: 'Carampoma' });
districts.set('140705', { code: '140705', name: 'Chicla' });
districts.set('140706', { code: '140706', name: 'Cuenca' });
districts.set('140707', { code: '140707', name: 'Huachupampa' });
districts.set('140708', { code: '140708', name: 'Huanza' });
districts.set('140709', { code: '140709', name: 'Huarochiri' });
districts.set('140710', { code: '140710', name: 'Lahuaytambo' });
districts.set('140711', { code: '140711', name: 'Langa' });
districts.set('140712', { code: '140712', name: 'Laraos' });
districts.set('140713', { code: '140713', name: 'Mariatana' });
districts.set('140714', { code: '140714', name: 'Ricardo Palma' });
districts.set('140715', { code: '140715', name: 'San Andres de Tupicocha' });
districts.set('140716', { code: '140716', name: 'San Antonio' });
districts.set('140717', { code: '140717', name: 'San Bartolome' });
districts.set('140718', { code: '140718', name: 'San Damian' });
districts.set('140719', { code: '140719', name: 'San Juan de Iris' });
districts.set('140720', { code: '140720', name: 'San Juan de Tantaranche' });
districts.set('140721', { code: '140721', name: 'San Lorenzo de Quinti' });
districts.set('140722', { code: '140722', name: 'San Mateo' });
districts.set('140723', { code: '140723', name: 'San Mateo de Otao' });
districts.set('140724', { code: '140724', name: 'San Pedro de Casta' });
districts.set('140725', { code: '140725', name: 'San Pedro de Huancayre' });
districts.set('140726', { code: '140726', name: 'Sangallaya' });
districts.set('140727', { code: '140727', name: 'Santa Cruz de Cocachacra' });
districts.set('140728', { code: '140728', name: 'Santa Eulalia' });
districts.set('140729', { code: '140729', name: 'Santiago de Anchucaya' });
districts.set('140730', { code: '140730', name: 'Santiago de Tuna' });
districts.set('140731', {
  code: '140731',
  name: 'Santo Domingo de Los Olleros',
});
districts.set('140732', { code: '140732', name: 'Surco' });
// 1408 - Huaura
districts.set('140801', { code: '140801', name: 'Huacho' });
districts.set('140802', { code: '140802', name: 'Ambar' });
districts.set('140803', { code: '140803', name: 'Caleta de Carquin' });
districts.set('140804', { code: '140804', name: 'Checras' });
districts.set('140805', { code: '140805', name: 'Hualmay' });
districts.set('140806', { code: '140806', name: 'Huaura' });
districts.set('140807', { code: '140807', name: 'Leoncio Prado' });
districts.set('140808', { code: '140808', name: 'Paccho' });
districts.set('140809', { code: '140809', name: 'Santa Leonor' });
districts.set('140810', { code: '140810', name: 'Santa Maria' });
districts.set('140811', { code: '140811', name: 'Sayan' });
districts.set('140812', { code: '140812', name: 'Vegueta' });
// 1409 - Oyon
districts.set('140901', { code: '140901', name: 'Oyon' });
districts.set('140902', { code: '140902', name: 'Andajes' });
districts.set('140903', { code: '140903', name: 'Caujul' });
districts.set('140904', { code: '140904', name: 'Cochamarca' });
districts.set('140905', { code: '140905', name: 'Navan' });
districts.set('140906', { code: '140906', name: 'Pachangara' });
// 1410 - Yauyos
districts.set('141001', { code: '141001', name: 'Yauyos' });
districts.set('141002', { code: '141002', name: 'Alis' });
districts.set('141003', { code: '141003', name: 'Allauca' });
districts.set('141004', { code: '141004', name: 'Ayaviri' });
districts.set('141005', { code: '141005', name: 'Azangaro' });
districts.set('141006', { code: '141006', name: 'Cacra' });
districts.set('141007', { code: '141007', name: 'Carania' });
districts.set('141008', { code: '141008', name: 'Catahuasi' });
districts.set('141009', { code: '141009', name: 'Chocos' });
districts.set('141010', { code: '141010', name: 'Cochas' });
districts.set('141011', { code: '141011', name: 'Colonia' });
districts.set('141012', { code: '141012', name: 'Hongos' });
districts.set('141013', { code: '141013', name: 'Huampara' });
districts.set('141014', { code: '141014', name: 'Huancaya' });
districts.set('141015', { code: '141015', name: 'Huangascar' });
districts.set('141016', { code: '141016', name: 'Huantan' });
districts.set('141017', { code: '141017', name: 'Huañec' });
districts.set('141018', { code: '141018', name: 'Laraos' });
districts.set('141019', { code: '141019', name: 'Lincha' });
districts.set('141020', { code: '141020', name: 'Madean' });
districts.set('141021', { code: '141021', name: 'Miraflores' });
districts.set('141022', { code: '141022', name: 'Omas' });
districts.set('141023', { code: '141023', name: 'Putinza' });
districts.set('141024', { code: '141024', name: 'Quinches' });
districts.set('141025', { code: '141025', name: 'Quinocay' });
districts.set('141026', { code: '141026', name: 'San Joaquin' });
districts.set('141027', { code: '141027', name: 'San Pedro de Pilas' });
districts.set('141028', { code: '141028', name: 'Tanta' });
districts.set('141029', { code: '141029', name: 'Tauripampa' });
districts.set('141030', { code: '141030', name: 'Tomas' });
districts.set('141031', { code: '141031', name: 'Tupe' });
districts.set('141032', { code: '141032', name: 'Viñac' });
districts.set('141033', { code: '141033', name: 'Vitis' });
// 15 - Loreto
// 1501 - Maynas
districts.set('150101', { code: '150101', name: 'Iquitos' });
districts.set('150102', { code: '150102', name: 'Alto Nanay' });
districts.set('150103', { code: '150103', name: 'Fernando Lores' });
districts.set('150104', { code: '150104', name: 'Indiana' });
districts.set('150105', { code: '150105', name: 'Las Amazonas' });
districts.set('150106', { code: '150106', name: 'Mazan' });
districts.set('150107', { code: '150107', name: 'Napo' });
districts.set('150108', { code: '150108', name: 'Punchana' });
districts.set('150110', { code: '150110', name: 'Torres Causana' });
districts.set('150112', { code: '150112', name: 'Belen' });
districts.set('150113', { code: '150113', name: 'San Juan Bautista' });
// 1502 - Alto Amazonas
districts.set('150201', { code: '150201', name: 'Yurimaguas' });
districts.set('150202', { code: '150202', name: 'Balsapuerto' });
districts.set('150205', { code: '150205', name: 'Jeberos' });
districts.set('150206', { code: '150206', name: 'Lagunas' });
districts.set('150210', { code: '150210', name: 'Santa Cruz' });
districts.set('150211', { code: '150211', name: 'Teniente Cesar Lopez Rojas' });
// 1503 - Loreto
districts.set('150301', { code: '150301', name: 'Nauta' });
districts.set('150302', { code: '150302', name: 'Parinari' });
districts.set('150303', { code: '150303', name: 'Tigre' });
districts.set('150304', { code: '150304', name: 'Trompeteros' });
districts.set('150305', { code: '150305', name: 'Urarinas' });
// 1504 - Mariscal Ramon Castilla
districts.set('150401', { code: '150401', name: 'Ramon Castilla' });
districts.set('150402', { code: '150402', name: 'Pebas' });
districts.set('150403', { code: '150403', name: 'Yavari' });
districts.set('150404', { code: '150404', name: 'San Pablo' });
// 1505 - Requena
districts.set('150501', { code: '150501', name: 'Requena' });
districts.set('150502', { code: '150502', name: 'Alto Tapiche' });
districts.set('150503', { code: '150503', name: 'Capelo' });
districts.set('150504', { code: '150504', name: 'Emilio San Martin' });
districts.set('150505', { code: '150505', name: 'Maquia' });
districts.set('150506', { code: '150506', name: 'Puinahua' });
districts.set('150507', { code: '150507', name: 'Saquena' });
districts.set('150508', { code: '150508', name: 'Soplin' });
districts.set('150509', { code: '150509', name: 'Tapiche' });
districts.set('150510', { code: '150510', name: 'Jenaro Herrera' });
districts.set('150511', { code: '150511', name: 'Yaquerana' });
// 1506 - Ucayali
districts.set('150601', { code: '150601', name: 'Contamana' });
districts.set('150602', { code: '150602', name: 'Inahuaya' });
districts.set('150603', { code: '150603', name: 'Padre Marquez' });
districts.set('150604', { code: '150604', name: 'Pampa Hermosa' });
districts.set('150605', { code: '150605', name: 'Sarayacu' });
districts.set('150606', { code: '150606', name: 'Vargas Guerra' });
// 1507 - Datem del Marañon
districts.set('150701', { code: '150701', name: 'Barranca' });
districts.set('150702', { code: '150702', name: 'Cahuapanas' });
districts.set('150703', { code: '150703', name: 'Manseriche' });
districts.set('150704', { code: '150704', name: 'Morona' });
districts.set('150705', { code: '150705', name: 'Pastaza' });
districts.set('150706', { code: '150706', name: 'Andoas' });
// 1508 - Putumayo
districts.set('150801', { code: '150801', name: 'Putumayo' });
districts.set('150802', { code: '150802', name: 'Rosa Panduro' });
districts.set('150803', { code: '150803', name: 'Teniente Manuel Clavero' });
districts.set('150804', { code: '150804', name: 'Yaguas' });
// 16 - Madre de Dios
// 1601 - Tambopata
districts.set('160101', { code: '160101', name: 'Tambopata' });
districts.set('160102', { code: '160102', name: 'Inambari' });
districts.set('160103', { code: '160103', name: 'Las Piedras' });
districts.set('160104', { code: '160104', name: 'Laberinto' });
// 1602 - Manu
districts.set('160201', { code: '160201', name: 'Manu' });
districts.set('160202', { code: '160202', name: 'Fitzcarrald' });
districts.set('160203', { code: '160203', name: 'Madre de Dios' });
districts.set('160204', { code: '160204', name: 'Huepetuhe' });
// 1603 - Tahuamanu
districts.set('160301', { code: '160301', name: 'Iñapari' });
districts.set('160302', { code: '160302', name: 'Iberia' });
districts.set('160303', { code: '160303', name: 'Tahuamanu' });
// 17 - Moquegua
// 1701 - Mariscal Nieto
districts.set('170101', { code: '170101', name: 'Moquegua' });
districts.set('170102', { code: '170102', name: 'Carumas' });
districts.set('170103', { code: '170103', name: 'Cuchumbaya' });
districts.set('170104', { code: '170104', name: 'Samegua' });
districts.set('170105', { code: '170105', name: 'San Cristobal' });
districts.set('170106', { code: '170106', name: 'Torata' });
// 1702 - General Sanchez Cerro
districts.set('170201', { code: '170201', name: 'Omate' });
districts.set('170202', { code: '170202', name: 'Chojata' });
districts.set('170203', { code: '170203', name: 'Coalaque' });
districts.set('170204', { code: '170204', name: 'Ichuña' });
districts.set('170205', { code: '170205', name: 'La Capilla' });
districts.set('170206', { code: '170206', name: 'Lloque' });
districts.set('170207', { code: '170207', name: 'Matalaque' });
districts.set('170208', { code: '170208', name: 'Puquina' });
districts.set('170209', { code: '170209', name: 'Quinistaquillas' });
districts.set('170210', { code: '170210', name: 'Ubinas' });
districts.set('170211', { code: '170211', name: 'Yunga' });
// 1703 - Ilo
districts.set('170301', { code: '170301', name: 'Ilo' });
districts.set('170302', { code: '170302', name: 'El Algarrobal' });
districts.set('170303', { code: '170303', name: 'Pacocha' });
// 18 - Pasco
// 1801 - Pasco
districts.set('180101', { code: '180101', name: 'Chaupimarca' });
districts.set('180102', { code: '180102', name: 'Huachon' });
districts.set('180103', { code: '180103', name: 'Huariaca' });
districts.set('180104', { code: '180104', name: 'Huayllay' });
districts.set('180105', { code: '180105', name: 'Ninacaca' });
districts.set('180106', { code: '180106', name: 'Pallanchacra' });
districts.set('180107', { code: '180107', name: 'Paucartambo' });
districts.set('180108', {
  code: '180108',
  name: 'San Francisco de Asis de Yarusyacan',
});
districts.set('180109', { code: '180109', name: 'Simon Bolivar' });
districts.set('180110', { code: '180110', name: 'Ticlacayan' });
districts.set('180111', { code: '180111', name: 'Tinyahuarco' });
districts.set('180112', { code: '180112', name: 'Vicco' });
districts.set('180113', { code: '180113', name: 'Yanacancha' });
// 1802 - Daniel Alcides Carrion
districts.set('180201', { code: '180201', name: 'Yanahuanca' });
districts.set('180202', { code: '180202', name: 'Chacayan' });
districts.set('180203', { code: '180203', name: 'Goyllarisquizga' });
districts.set('180204', { code: '180204', name: 'Paucar' });
districts.set('180205', { code: '180205', name: 'San Pedro de Pillao' });
districts.set('180206', { code: '180206', name: 'Santa Ana de Tusi' });
districts.set('180207', { code: '180207', name: 'Tapuc' });
districts.set('180208', { code: '180208', name: 'Vilcabamba' });
// 1803 - Oxapampa
districts.set('180301', { code: '180301', name: 'Oxapampa' });
districts.set('180302', { code: '180302', name: 'Chontabamba' });
districts.set('180303', { code: '180303', name: 'Huancabamba' });
districts.set('180304', { code: '180304', name: 'Palcazu' });
districts.set('180305', { code: '180305', name: 'Pozuzo' });
districts.set('180306', { code: '180306', name: 'Puerto Bermudez' });
districts.set('180307', { code: '180307', name: 'Villa Rica' });
districts.set('180308', { code: '180308', name: 'Constitucion' });
// 19 - Piura
// 1901 - Piura
districts.set('190101', { code: '190101', name: 'Piura' });
districts.set('190104', { code: '190104', name: 'Castilla' });
districts.set('190105', { code: '190105', name: 'Catacaos' });
districts.set('190107', { code: '190107', name: 'Cura Mori' });
districts.set('190108', { code: '190108', name: 'El Tallan' });
districts.set('190109', { code: '190109', name: 'La Arena' });
districts.set('190110', { code: '190110', name: 'La Union' });
districts.set('190111', { code: '190111', name: 'Las Lomas' });
districts.set('190114', { code: '190114', name: 'Tambo Grande' });
districts.set('190115', { code: '190115', name: 'Veintiseis de Octubre' });
// 1902 - Ayabaca
districts.set('190201', { code: '190201', name: 'Ayabaca' });
districts.set('190202', { code: '190202', name: 'Frias' });
districts.set('190203', { code: '190203', name: 'Jilili' });
districts.set('190204', { code: '190204', name: 'Lagunas' });
districts.set('190205', { code: '190205', name: 'Montero' });
districts.set('190206', { code: '190206', name: 'Pacaipampa' });
districts.set('190207', { code: '190207', name: 'Paimas' });
districts.set('190208', { code: '190208', name: 'Sapillica' });
districts.set('190209', { code: '190209', name: 'Sicchez' });
districts.set('190210', { code: '190210', name: 'Suyo' });
// 1903 - Huancabamba
districts.set('190301', { code: '190301', name: 'Huancabamba' });
districts.set('190302', { code: '190302', name: 'Canchaque' });
districts.set('190303', { code: '190303', name: 'El Carmen de la Frontera' });
districts.set('190304', { code: '190304', name: 'Huarmaca' });
districts.set('190305', { code: '190305', name: 'Lalaquiz' });
districts.set('190306', { code: '190306', name: 'San Miguel de El Faique' });
districts.set('190307', { code: '190307', name: 'Sondor' });
districts.set('190308', { code: '190308', name: 'Sondorillo' });
// 1904 - Morropon
districts.set('190401', { code: '190401', name: 'Chulucanas' });
districts.set('190402', { code: '190402', name: 'Buenos Aires' });
districts.set('190403', { code: '190403', name: 'Chalaco' });
districts.set('190404', { code: '190404', name: 'La Matanza' });
districts.set('190405', { code: '190405', name: 'Morropon' });
districts.set('190406', { code: '190406', name: 'Salitral' });
districts.set('190407', { code: '190407', name: 'San Juan de Bigote' });
districts.set('190408', { code: '190408', name: 'Santa Catalina de Mossa' });
districts.set('190409', { code: '190409', name: 'Santo Domingo' });
districts.set('190410', { code: '190410', name: 'Yamango' });
// 1905 - Paita
districts.set('190501', { code: '190501', name: 'Paita' });
districts.set('190502', { code: '190502', name: 'Amotape' });
districts.set('190503', { code: '190503', name: 'Arenal' });
districts.set('190504', { code: '190504', name: 'Colan' });
districts.set('190505', { code: '190505', name: 'La Huaca' });
districts.set('190506', { code: '190506', name: 'Tamarindo' });
districts.set('190507', { code: '190507', name: 'Vichayal' });
// 1906 - Sullana
districts.set('190601', { code: '190601', name: 'Sullana' });
districts.set('190602', { code: '190602', name: 'Bellavista' });
districts.set('190603', { code: '190603', name: 'Ignacio Escudero' });
districts.set('190604', { code: '190604', name: 'Lancones' });
districts.set('190605', { code: '190605', name: 'Marcavelica' });
districts.set('190606', { code: '190606', name: 'Miguel Checa' });
districts.set('190607', { code: '190607', name: 'Querecotillo' });
districts.set('190608', { code: '190608', name: 'Salitral' });
// 1907 - Talara
districts.set('190701', { code: '190701', name: 'Pariñas' });
districts.set('190702', { code: '190702', name: 'El Alto' });
districts.set('190703', { code: '190703', name: 'La Brea' });
districts.set('190704', { code: '190704', name: 'Lobitos' });
districts.set('190705', { code: '190705', name: 'Los Organos' });
districts.set('190706', { code: '190706', name: 'Mancora' });
// 1908 - Sechura
districts.set('190801', { code: '190801', name: 'Sechura' });
districts.set('190802', { code: '190802', name: 'Bellavista de la Union' });
districts.set('190803', { code: '190803', name: 'Bernal' });
districts.set('190804', { code: '190804', name: 'Cristo Nos Valga' });
districts.set('190805', { code: '190805', name: 'Vice' });
districts.set('190806', { code: '190806', name: 'Rinconada Llicuar' });
// 20 - Puno
// 2001 - Puno
districts.set('200101', { code: '200101', name: 'Puno' });
districts.set('200102', { code: '200102', name: 'Acora' });
districts.set('200103', { code: '200103', name: 'Amantani' });
districts.set('200104', { code: '200104', name: 'Atuncolla' });
districts.set('200105', { code: '200105', name: 'Capachica' });
districts.set('200106', { code: '200106', name: 'Chucuito' });
districts.set('200107', { code: '200107', name: 'Coata' });
districts.set('200108', { code: '200108', name: 'Huata' });
districts.set('200109', { code: '200109', name: 'Mañazo' });
districts.set('200110', { code: '200110', name: 'Paucarcolla' });
districts.set('200111', { code: '200111', name: 'Pichacani' });
districts.set('200112', { code: '200112', name: 'Plateria' });
districts.set('200113', { code: '200113', name: 'San Antonio' });
districts.set('200114', { code: '200114', name: 'Tiquillaca' });
districts.set('200115', { code: '200115', name: 'Vilque' });
// 2002 - Azangaro
districts.set('200201', { code: '200201', name: 'Azangaro' });
districts.set('200202', { code: '200202', name: 'Achaya' });
districts.set('200203', { code: '200203', name: 'Arapa' });
districts.set('200204', { code: '200204', name: 'Asillo' });
districts.set('200205', { code: '200205', name: 'Caminaca' });
districts.set('200206', { code: '200206', name: 'Chupa' });
districts.set('200207', { code: '200207', name: 'Jose Domingo Choquehuanca' });
districts.set('200208', { code: '200208', name: 'Muñani' });
districts.set('200209', { code: '200209', name: 'Potoni' });
districts.set('200210', { code: '200210', name: 'Saman' });
districts.set('200211', { code: '200211', name: 'San Anton' });
districts.set('200212', { code: '200212', name: 'San Jose' });
districts.set('200213', { code: '200213', name: 'San Juan de Salinas' });
districts.set('200214', { code: '200214', name: 'Santiago de Pupuja' });
districts.set('200215', { code: '200215', name: 'Tirapata' });
// 2003 - Carabaya
districts.set('200301', { code: '200301', name: 'Macusani' });
districts.set('200302', { code: '200302', name: 'Ajoyani' });
districts.set('200303', { code: '200303', name: 'Ayapata' });
districts.set('200304', { code: '200304', name: 'Coasa' });
districts.set('200305', { code: '200305', name: 'Corani' });
districts.set('200306', { code: '200306', name: 'Crucero' });
districts.set('200307', { code: '200307', name: 'Ituata' });
districts.set('200308', { code: '200308', name: 'Ollachea' });
districts.set('200309', { code: '200309', name: 'San Gaban' });
districts.set('200310', { code: '200310', name: 'Usicayos' });
// 2004 - Chucuito
districts.set('200401', { code: '200401', name: 'Juli' });
districts.set('200402', { code: '200402', name: 'Desaguadero' });
districts.set('200403', { code: '200403', name: 'Huacullani' });
districts.set('200404', { code: '200404', name: 'Kelluyo' });
districts.set('200405', { code: '200405', name: 'Pisacoma' });
districts.set('200406', { code: '200406', name: 'Pomata' });
districts.set('200407', { code: '200407', name: 'Zepita' });
// 2005 - El Collao
districts.set('200501', { code: '200501', name: 'Ilave' });
districts.set('200502', { code: '200502', name: 'Capazo' });
districts.set('200503', { code: '200503', name: 'Pilcuyo' });
districts.set('200504', { code: '200504', name: 'Santa Rosa' });
districts.set('200505', { code: '200505', name: 'Conduriri' });
// 2006 - Huancane
districts.set('200601', { code: '200601', name: 'Huancane' });
districts.set('200602', { code: '200602', name: 'Cojata' });
districts.set('200603', { code: '200603', name: 'Huatasani' });
districts.set('200604', { code: '200604', name: 'Inchupalla' });
districts.set('200605', { code: '200605', name: 'Pusi' });
districts.set('200606', { code: '200606', name: 'Rosaspata' });
districts.set('200607', { code: '200607', name: 'Taraco' });
districts.set('200608', { code: '200608', name: 'Vilque Chico' });
// 2007 - Lampa
districts.set('200701', { code: '200701', name: 'Lampa' });
districts.set('200702', { code: '200702', name: 'Cabanilla' });
districts.set('200703', { code: '200703', name: 'Calapuja' });
districts.set('200704', { code: '200704', name: 'Nicasio' });
districts.set('200705', { code: '200705', name: 'Ocuviri' });
districts.set('200706', { code: '200706', name: 'Palca' });
districts.set('200707', { code: '200707', name: 'Paratia' });
districts.set('200708', { code: '200708', name: 'Pucara' });
districts.set('200709', { code: '200709', name: 'Santa Lucia' });
districts.set('200710', { code: '200710', name: 'Vilavila' });
// 2008 - Melgar
districts.set('200801', { code: '200801', name: 'Ayaviri' });
districts.set('200802', { code: '200802', name: 'Antauta' });
districts.set('200803', { code: '200803', name: 'Cupi' });
districts.set('200804', { code: '200804', name: 'Llalli' });
districts.set('200805', { code: '200805', name: 'Macari' });
districts.set('200806', { code: '200806', name: 'Nuñoa' });
districts.set('200807', { code: '200807', name: 'Orurillo' });
districts.set('200808', { code: '200808', name: 'Santa Rosa' });
districts.set('200809', { code: '200809', name: 'Umachiri' });
// 2009 - Moho
districts.set('200901', { code: '200901', name: 'Moho' });
districts.set('200902', { code: '200902', name: 'Conima' });
districts.set('200903', { code: '200903', name: 'Huayrapata' });
districts.set('200904', { code: '200904', name: 'Tilali' });
// 2010 - San Antonio de Putina
districts.set('201001', { code: '201001', name: 'Putina' });
districts.set('201002', { code: '201002', name: 'Ananea' });
districts.set('201003', { code: '201003', name: 'Pedro Vilca Apaza' });
districts.set('201004', { code: '201004', name: 'Quilcapuncu' });
districts.set('201005', { code: '201005', name: 'Sina' });
// 2011 - San Roman
districts.set('201101', { code: '201101', name: 'Juliaca' });
districts.set('201102', { code: '201102', name: 'Cabana' });
districts.set('201103', { code: '201103', name: 'Cabanillas' });
districts.set('201104', { code: '201104', name: 'Caracoto' });
// 2012 - Sandia
districts.set('201201', { code: '201201', name: 'Sandia' });
districts.set('201202', { code: '201202', name: 'Cuyocuyo' });
districts.set('201203', { code: '201203', name: 'Limbani' });
districts.set('201204', { code: '201204', name: 'Patambuco' });
districts.set('201205', { code: '201205', name: 'Phara' });
districts.set('201206', { code: '201206', name: 'Quiaca' });
districts.set('201207', { code: '201207', name: 'San Juan del Oro' });
districts.set('201208', { code: '201208', name: 'Yanahuaya' });
districts.set('201209', { code: '201209', name: 'Alto Inambari' });
districts.set('201210', { code: '201210', name: 'San Pedro de Putina Punco' });
// 2013 - Yunguyo
districts.set('201301', { code: '201301', name: 'Yunguyo' });
districts.set('201302', { code: '201302', name: 'Anapia' });
districts.set('201303', { code: '201303', name: 'Copani' });
districts.set('201304', { code: '201304', name: 'Cuturapi' });
districts.set('201305', { code: '201305', name: 'Ollaraya' });
districts.set('201306', { code: '201306', name: 'Tinicachi' });
districts.set('201307', { code: '201307', name: 'Unicachi' });
// 21 - San Martin
// 2101 - Moyobamba
districts.set('210101', { code: '210101', name: 'Moyobamba' });
districts.set('210102', { code: '210102', name: 'Calzada' });
districts.set('210103', { code: '210103', name: 'Habana' });
districts.set('210104', { code: '210104', name: 'Jepelacio' });
districts.set('210105', { code: '210105', name: 'Soritor' });
districts.set('210106', { code: '210106', name: 'Yantalo' });
// 2102 - Bellavista
districts.set('210201', { code: '210201', name: 'Bellavista' });
districts.set('210202', { code: '210202', name: 'Alto Biavo' });
districts.set('210203', { code: '210203', name: 'Bajo Biavo' });
districts.set('210204', { code: '210204', name: 'Huallaga' });
districts.set('210205', { code: '210205', name: 'San Pablo' });
districts.set('210206', { code: '210206', name: 'San Rafael' });
// 2103 - El Dorado
districts.set('210301', { code: '210301', name: 'San Jose de Sisa' });
districts.set('210302', { code: '210302', name: 'Agua Blanca' });
districts.set('210303', { code: '210303', name: 'San Martin' });
districts.set('210304', { code: '210304', name: 'Santa Rosa' });
districts.set('210305', { code: '210305', name: 'Shatoja' });
// 2104 - Huallaga
districts.set('210401', { code: '210401', name: 'Saposoa' });
districts.set('210402', { code: '210402', name: 'Alto Saposoa' });
districts.set('210403', { code: '210403', name: 'El Eslabon' });
districts.set('210404', { code: '210404', name: 'Piscoyacu' });
districts.set('210405', { code: '210405', name: 'Sacanche' });
districts.set('210406', { code: '210406', name: 'Tingo de Saposoa' });
// 2105 - Lamas
districts.set('210501', { code: '210501', name: 'Lamas' });
districts.set('210502', { code: '210502', name: 'Alonso de Alvarado' });
districts.set('210503', { code: '210503', name: 'Barranquita' });
districts.set('210504', { code: '210504', name: 'Caynarachi' });
districts.set('210505', { code: '210505', name: 'Cuñumbuqui' });
districts.set('210506', { code: '210506', name: 'Pinto Recodo' });
districts.set('210507', { code: '210507', name: 'Rumisapa' });
districts.set('210508', { code: '210508', name: 'San Roque de Cumbaza' });
districts.set('210509', { code: '210509', name: 'Shanao' });
districts.set('210510', { code: '210510', name: 'Tabalosos' });
districts.set('210511', { code: '210511', name: 'Zapatero' });
// 2106 - Mariscal Caceres
districts.set('210601', { code: '210601', name: 'Juanjui' });
districts.set('210602', { code: '210602', name: 'Campanilla' });
districts.set('210603', { code: '210603', name: 'Huicungo' });
districts.set('210604', { code: '210604', name: 'Pachiza' });
districts.set('210605', { code: '210605', name: 'Pajarillo' });
// 2107 - Picota
districts.set('210701', { code: '210701', name: 'Picota' });
districts.set('210702', { code: '210702', name: 'Buenos Aires' });
districts.set('210703', { code: '210703', name: 'Caspisapa' });
districts.set('210704', { code: '210704', name: 'Pilluana' });
districts.set('210705', { code: '210705', name: 'Pucacaca' });
districts.set('210706', { code: '210706', name: 'San Cristobal' });
districts.set('210707', { code: '210707', name: 'San Hilarion' });
districts.set('210708', { code: '210708', name: 'Shamboyacu' });
districts.set('210709', { code: '210709', name: 'Tingo de Ponasa' });
districts.set('210710', { code: '210710', name: 'Tres Unidos' });
// 2108 - Rioja
districts.set('210801', { code: '210801', name: 'Rioja' });
districts.set('210802', { code: '210802', name: 'Awajun' });
districts.set('210803', { code: '210803', name: 'Elias Soplin Vargas' });
districts.set('210804', { code: '210804', name: 'Nueva Cajamarca' });
districts.set('210805', { code: '210805', name: 'Pardo Miguel' });
districts.set('210806', { code: '210806', name: 'Posic' });
districts.set('210807', { code: '210807', name: 'San Fernando' });
districts.set('210808', { code: '210808', name: 'Yorongos' });
districts.set('210809', { code: '210809', name: 'Yuracyacu' });
// 2109 - San Martin
districts.set('210901', { code: '210901', name: 'Tarapoto' });
districts.set('210902', { code: '210902', name: 'Alberto Leveau' });
districts.set('210903', { code: '210903', name: 'Cacatachi' });
districts.set('210904', { code: '210904', name: 'Chazuta' });
districts.set('210905', { code: '210905', name: 'Chipurana' });
districts.set('210906', { code: '210906', name: 'El Porvenir' });
districts.set('210907', { code: '210907', name: 'Huimbayoc' });
districts.set('210908', { code: '210908', name: 'Juan Guerra' });
districts.set('210909', { code: '210909', name: 'La Banda de Shilcayo' });
districts.set('210910', { code: '210910', name: 'Morales' });
districts.set('210911', { code: '210911', name: 'Papaplaya' });
districts.set('210912', { code: '210912', name: 'San Antonio' });
districts.set('210913', { code: '210913', name: 'Sauce' });
districts.set('210914', { code: '210914', name: 'Shapaja' });
// 2110 - Tocache
districts.set('211001', { code: '211001', name: 'Tocache' });
districts.set('211002', { code: '211002', name: 'Nuevo Progreso' });
districts.set('211003', { code: '211003', name: 'Polvora' });
districts.set('211004', { code: '211004', name: 'Shunte' });
districts.set('211005', { code: '211005', name: 'Uchiza' });
// 22 - Tacna
// 2201 - Tacna
districts.set('220101', { code: '220101', name: 'Tacna' });
districts.set('220102', { code: '220102', name: 'Alto de la Alianza' });
districts.set('220103', { code: '220103', name: 'Calana' });
districts.set('220104', { code: '220104', name: 'Ciudad Nueva' });
districts.set('220105', { code: '220105', name: 'Inclan' });
districts.set('220106', { code: '220106', name: 'Pachia' });
districts.set('220107', { code: '220107', name: 'Palca' });
districts.set('220108', { code: '220108', name: 'Pocollay' });
districts.set('220109', { code: '220109', name: 'Sama' });
districts.set('220110', {
  code: '220110',
  name: 'Coronel Gregorio Albarracin Lanchipa',
});
districts.set('220111', { code: '220111', name: 'La Yarada los Palos' });
// 2202 - Candarave
districts.set('220201', { code: '220201', name: 'Candarave' });
districts.set('220202', { code: '220202', name: 'Cairani' });
districts.set('220203', { code: '220203', name: 'Camilaca' });
districts.set('220204', { code: '220204', name: 'Curibaya' });
districts.set('220205', { code: '220205', name: 'Huanuara' });
districts.set('220206', { code: '220206', name: 'Quilahuani' });
// 2203 - Jorge Basadre
districts.set('220301', { code: '220301', name: 'Locumba' });
districts.set('220302', { code: '220302', name: 'Ilabaya' });
districts.set('220303', { code: '220303', name: 'Ite' });
// 2204 - Tarata
districts.set('220401', { code: '220401', name: 'Tarata' });
districts.set('220402', { code: '220402', name: 'Heroes Albarracin' });
districts.set('220403', { code: '220403', name: 'Estique' });
districts.set('220404', { code: '220404', name: 'Estique-Pampa' });
districts.set('220405', { code: '220405', name: 'Sitajara' });
districts.set('220406', { code: '220406', name: 'Susapaya' });
districts.set('220407', { code: '220407', name: 'Tarucachi' });
districts.set('220408', { code: '220408', name: 'Ticaco' });
// 23 - Tumbes
// 2301 - Tumbes
districts.set('230101', { code: '230101', name: 'Tumbes' });
districts.set('230102', { code: '230102', name: 'Corrales' });
districts.set('230103', { code: '230103', name: 'La Cruz' });
districts.set('230104', { code: '230104', name: 'Pampas de Hospital' });
districts.set('230105', { code: '230105', name: 'San Jacinto' });
districts.set('230106', { code: '230106', name: 'San Juan de la Virgen' });
// 2302 - Contralmirante Villar
districts.set('230201', { code: '230201', name: 'Zorritos' });
districts.set('230202', { code: '230202', name: 'Casitas' });
districts.set('230203', { code: '230203', name: 'Canoas de Punta Sal' });
// 2303 - Zarumilla
districts.set('230301', { code: '230301', name: 'Zarumilla' });
districts.set('230302', { code: '230302', name: 'Aguas Verdes' });
districts.set('230303', { code: '230303', name: 'Matapalo' });
districts.set('230304', { code: '230304', name: 'Papayal' });
// 24 - Callao
// 2401 - Prov. Const. del Callao
districts.set('070101', { code: '070101', name: 'Callao' });
districts.set('070102', { code: '070102', name: 'Bellavista' });
districts.set('070103', { code: '070103', name: 'Carmen de la Legua Reynoso' });
districts.set('070104', { code: '070104', name: 'La Perla' });
districts.set('070105', { code: '070105', name: 'La Punta' });
districts.set('070106', { code: '070106', name: 'Ventanilla' });
districts.set('070107', { code: '070107', name: 'Mi Peru' });
// 25 - Ucayali
// 2501 - Coronel Portillo
districts.set('250101', { code: '250101', name: 'Calleria' });
districts.set('250102', { code: '250102', name: 'Campoverde' });
districts.set('250103', { code: '250103', name: 'Iparia' });
districts.set('250104', { code: '250104', name: 'Masisea' });
districts.set('250105', { code: '250105', name: 'Yarinacocha' });
districts.set('250106', { code: '250106', name: 'Nueva Requena' });
districts.set('250107', { code: '250107', name: 'Manantay' });
// 2502 - Atalaya
districts.set('250201', { code: '250201', name: 'Raymondi' });
districts.set('250202', { code: '250202', name: 'Sepahua' });
districts.set('250203', { code: '250203', name: 'Tahuania' });
districts.set('250204', { code: '250204', name: 'Yurua' });
// 2503 - Padre Abad
districts.set('250301', { code: '250301', name: 'Padre Abad' });
districts.set('250302', { code: '250302', name: 'Irazola' });
districts.set('250303', { code: '250303', name: 'Curimana' });
districts.set('250304', { code: '250304', name: 'Neshuya' });
districts.set('250305', { code: '250305', name: 'Alexander Von Humboldt' });
// 2504 - Purus
districts.set('250401', { code: '250401', name: 'Purus' });

export { districts };
