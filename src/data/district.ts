import type { IUbigeo } from '../@types';

const district: Map<string, IUbigeo> = new Map();

// 01 - Amazonas
// 0101 - Chachapoyas
district.set('010101', { code: '010101', name: 'Chachapoyas' });
district.set('010102', { code: '010102', name: 'Asunción' });
district.set('010103', { code: '010103', name: 'Balsas' });
district.set('010104', { code: '010104', name: 'Cheto' });
district.set('010105', { code: '010105', name: 'Chiliquin' });
district.set('010106', { code: '010106', name: 'Chuquibamba' });
district.set('010107', { code: '010107', name: 'Granada' });
district.set('010108', { code: '010108', name: 'Huancas' });
district.set('010109', { code: '010109', name: 'La Jalca' });
district.set('010110', { code: '010110', name: 'Leimebamba' });
district.set('010111', { code: '010111', name: 'Levanto' });
district.set('010112', { code: '010112', name: 'Magdalena' });
district.set('010113', { code: '010113', name: 'Mariscal Castilla' });
district.set('010114', { code: '010114', name: 'Molinopampa' });
district.set('010115', { code: '010115', name: 'Montevideo' });
district.set('010116', { code: '010116', name: 'Olleros' });
district.set('010117', { code: '010117', name: 'Quinjalca' });
district.set('010118', { code: '010118', name: 'San Francisco de Daguas' });
district.set('010119', { code: '010119', name: 'San Isidro de Maino' });
district.set('010120', { code: '010120', name: 'Soloco' });
district.set('010121', { code: '010121', name: 'Sonche' });
// 0102 - Bagua
district.set('010201', { code: '010201', name: 'Bagua' });
district.set('010202', { code: '010202', name: 'Aramango' });
district.set('010203', { code: '010203', name: 'Copallin' });
district.set('010204', { code: '010204', name: 'El Parco' });
district.set('010205', { code: '010205', name: 'Imaza' });
district.set('010206', { code: '010206', name: 'La Peca' });
// 0103 - Bongará
district.set('010301', { code: '010301', name: 'Jumbilla' });
district.set('010302', { code: '010302', name: 'Chisquilla' });
district.set('010303', { code: '010303', name: 'Churuja' });
district.set('010304', { code: '010304', name: 'Corosha' });
district.set('010305', { code: '010305', name: 'Cuispes' });
district.set('010306', { code: '010306', name: 'Florida' });
district.set('010307', { code: '010307', name: 'Jazan' });
district.set('010308', { code: '010308', name: 'Recta' });
district.set('010309', { code: '010309', name: 'San Carlos' });
district.set('010310', { code: '010310', name: 'Shipasbamba' });
district.set('010311', { code: '010311', name: 'Valera' });
district.set('010312', { code: '010312', name: 'Yambrasbamba' });
// 0104 - Condorcanqui
district.set('010401', { code: '010401', name: 'Nieva' });
district.set('010402', { code: '010402', name: 'El Cenepa' });
district.set('010403', { code: '010403', name: 'Río Santiago' });
// 0105 - Luya
district.set('010501', { code: '010501', name: 'Lamud' });
district.set('010502', { code: '010502', name: 'Camporredondo' });
district.set('010503', { code: '010503', name: 'Cocabamba' });
district.set('010504', { code: '010504', name: 'Colcamar' });
district.set('010505', { code: '010505', name: 'Conila' });
district.set('010506', { code: '010506', name: 'Inguilpata' });
district.set('010507', { code: '010507', name: 'Longuita' });
district.set('010508', { code: '010508', name: 'Lonya Chico' });
district.set('010509', { code: '010509', name: 'Luya' });
district.set('010510', { code: '010510', name: 'Luya Viejo' });
district.set('010511', { code: '010511', name: 'María' });
district.set('010512', { code: '010512', name: 'Ocalli' });
district.set('010513', { code: '010513', name: 'Ocumal' });
district.set('010514', { code: '010514', name: 'Pisuquia' });
district.set('010515', { code: '010515', name: 'Providencia' });
district.set('010516', { code: '010516', name: 'San Cristóbal' });
district.set('010517', { code: '010517', name: 'San Francisco de Yeso' });
district.set('010518', { code: '010518', name: 'San Jerónimo' });
district.set('010519', { code: '010519', name: 'San Juan de Lopecancha' });
district.set('010520', { code: '010520', name: 'Santa Catalina' });
district.set('010521', { code: '010521', name: 'Santo Tomas' });
district.set('010522', { code: '010522', name: 'Tingo' });
district.set('010523', { code: '010523', name: 'Trita' });
// 0106 - Rodríguez de Mendoza
district.set('010601', { code: '010601', name: 'San Nicolás' });
district.set('010602', { code: '010602', name: 'Chirimoto' });
district.set('010603', { code: '010603', name: 'Cochamal' });
district.set('010604', { code: '010604', name: 'Huambo' });
district.set('010605', { code: '010605', name: 'Limabamba' });
district.set('010606', { code: '010606', name: 'Longar' });
district.set('010607', { code: '010607', name: 'Mariscal Benavides' });
district.set('010608', { code: '010608', name: 'Milpuc' });
district.set('010609', { code: '010609', name: 'Omia' });
district.set('010610', { code: '010610', name: 'Santa Rosa' });
district.set('010611', { code: '010611', name: 'Totora' });
district.set('010612', { code: '010612', name: 'Vista Alegre' });
// 0107 - Utcubamba
district.set('010701', { code: '010701', name: 'Bagua Grande' });
district.set('010702', { code: '010702', name: 'Cajaruro' });
district.set('010703', { code: '010703', name: 'Cumba' });
district.set('010704', { code: '010704', name: 'El Milagro' });
district.set('010705', { code: '010705', name: 'Jamalca' });
district.set('010706', { code: '010706', name: 'Lonya Grande' });
district.set('010707', { code: '010707', name: 'Yamon' });
// 02 - Áncash
// 0201 - Huaraz
district.set('020101', { code: '020101', name: 'Huaraz' });
district.set('020102', { code: '020102', name: 'Cochabamba' });
district.set('020103', { code: '020103', name: 'Colcabamba' });
district.set('020104', { code: '020104', name: 'Huanchay' });
district.set('020105', { code: '020105', name: 'Independencia' });
district.set('020106', { code: '020106', name: 'Jangas' });
district.set('020107', { code: '020107', name: 'La Libertad' });
district.set('020108', { code: '020108', name: 'Olleros' });
district.set('020109', { code: '020109', name: 'Pampas Grande' });
district.set('020110', { code: '020110', name: 'Pariacoto' });
district.set('020111', { code: '020111', name: 'Pira' });
district.set('020112', { code: '020112', name: 'Tarica' });
// 0202 - Aija
district.set('020201', { code: '020201', name: 'Aija' });
district.set('020202', { code: '020202', name: 'Coris' });
district.set('020203', { code: '020203', name: 'Huacllan' });
district.set('020204', { code: '020204', name: 'La Merced' });
district.set('020205', { code: '020205', name: 'Succha' });
// 0203 - Antonio Raymondi
district.set('020301', { code: '020301', name: 'Llamellin' });
district.set('020302', { code: '020302', name: 'Aczo' });
district.set('020303', { code: '020303', name: 'Chaccho' });
district.set('020304', { code: '020304', name: 'Chingas' });
district.set('020305', { code: '020305', name: 'Mirgas' });
district.set('020306', { code: '020306', name: 'San Juan de Rontoy' });
// 0204 - Asunción
district.set('020401', { code: '020401', name: 'Chacas' });
district.set('020402', { code: '020402', name: 'Acochaca' });
// 0205 - Bolognesi
district.set('020501', { code: '020501', name: 'Chiquian' });
district.set('020502', { code: '020502', name: 'Abelardo Pardo Lezameta' });
district.set('020503', { code: '020503', name: 'Antonio Raymondi' });
district.set('020504', { code: '020504', name: 'Aquia' });
district.set('020505', { code: '020505', name: 'Cajacay' });
district.set('020506', { code: '020506', name: 'Canis' });
district.set('020507', { code: '020507', name: 'Colquioc' });
district.set('020508', { code: '020508', name: 'Huallanca' });
district.set('020509', { code: '020509', name: 'Huasta' });
district.set('020510', { code: '020510', name: 'Huayllacayan' });
district.set('020511', { code: '020511', name: 'La Primavera' });
district.set('020512', { code: '020512', name: 'Mangas' });
district.set('020513', { code: '020513', name: 'Pacllon' });
district.set('020514', { code: '020514', name: 'San Miguel de Corpanqui' });
district.set('020515', { code: '020515', name: 'Ticllos' });
// 0206 - Carhuaz
district.set('020601', { code: '020601', name: 'Carhuaz' });
district.set('020602', { code: '020602', name: 'Acopampa' });
district.set('020603', { code: '020603', name: 'Amashca' });
district.set('020604', { code: '020604', name: 'Anta' });
district.set('020605', { code: '020605', name: 'Ataquero' });
district.set('020606', { code: '020606', name: 'Marcara' });
district.set('020607', { code: '020607', name: 'Pariahuanca' });
district.set('020608', { code: '020608', name: 'San Miguel de Aco' });
district.set('020609', { code: '020609', name: 'Shilla' });
district.set('020610', { code: '020610', name: 'Tinco' });
district.set('020611', { code: '020611', name: 'Yungar' });
// 0207 - Carlos Fermín Fitzcarrald
district.set('020701', { code: '020701', name: 'San Luis' });
district.set('020702', { code: '020702', name: 'San Nicolás' });
district.set('020703', { code: '020703', name: 'Yauya' });
// 0208 - Casma
district.set('020801', { code: '020801', name: 'Casma' });
district.set('020802', { code: '020802', name: 'Buena Vista Alta' });
district.set('020803', { code: '020803', name: 'Comandante Noel' });
district.set('020804', { code: '020804', name: 'Yautan' });
// 0209 - Corongo
district.set('020901', { code: '020901', name: 'Corongo' });
district.set('020902', { code: '020902', name: 'Aco' });
district.set('020903', { code: '020903', name: 'Bambas' });
district.set('020904', { code: '020904', name: 'Cusca' });
district.set('020905', { code: '020905', name: 'La Pampa' });
district.set('020906', { code: '020906', name: 'Yanac' });
district.set('020907', { code: '020907', name: 'Yupan' });
// 0210 - Huari
district.set('021001', { code: '021001', name: 'Huari' });
district.set('021002', { code: '021002', name: 'Anra' });
district.set('021003', { code: '021003', name: 'Cajay' });
district.set('021004', { code: '021004', name: 'Chavin de Huantar' });
district.set('021005', { code: '021005', name: 'Huacachi' });
district.set('021006', { code: '021006', name: 'Huacchis' });
district.set('021007', { code: '021007', name: 'Huachis' });
district.set('021008', { code: '021008', name: 'Huantar' });
district.set('021009', { code: '021009', name: 'Masin' });
district.set('021010', { code: '021010', name: 'Paucas' });
district.set('021011', { code: '021011', name: 'Ponto' });
district.set('021012', { code: '021012', name: 'Rahuapampa' });
district.set('021013', { code: '021013', name: 'Rapayan' });
district.set('021014', { code: '021014', name: 'San Marcos' });
district.set('021015', { code: '021015', name: 'San Pedro de Chana' });
district.set('021016', { code: '021016', name: 'Uco' });
// 0211 - Huarmey
district.set('021101', { code: '021101', name: 'Huarmey' });
district.set('021102', { code: '021102', name: 'Cochapeti' });
district.set('021103', { code: '021103', name: 'Culebras' });
district.set('021104', { code: '021104', name: 'Huayan' });
district.set('021105', { code: '021105', name: 'Malvas' });
// 0212 - Huaylas
district.set('021201', { code: '021201', name: 'Caraz' });
district.set('021202', { code: '021202', name: 'Huallanca' });
district.set('021203', { code: '021203', name: 'Huata' });
district.set('021204', { code: '021204', name: 'Huaylas' });
district.set('021205', { code: '021205', name: 'Mato' });
district.set('021206', { code: '021206', name: 'Pamparomas' });
district.set('021207', { code: '021207', name: 'Pueblo Libre' });
district.set('021208', { code: '021208', name: 'Santa Cruz' });
district.set('021209', { code: '021209', name: 'Santo Toribio' });
district.set('021210', { code: '021210', name: 'Yuracmarca' });
// 0213 - Mariscal Luzuriaga
district.set('021301', { code: '021301', name: 'Piscobamba' });
district.set('021302', { code: '021302', name: 'Casca' });
district.set('021303', { code: '021303', name: 'Eleazar Guzmán Barron' });
district.set('021304', { code: '021304', name: 'Fidel Olivas Escudero' });
district.set('021305', { code: '021305', name: 'Llama' });
district.set('021306', { code: '021306', name: 'Llumpa' });
district.set('021307', { code: '021307', name: 'Lucma' });
district.set('021308', { code: '021308', name: 'Musga' });
// 0214 - Ocros
district.set('021401', { code: '021401', name: 'Ocros' });
district.set('021402', { code: '021402', name: 'Acas' });
district.set('021403', { code: '021403', name: 'Cajamarquilla' });
district.set('021404', { code: '021404', name: 'Carhuapampa' });
district.set('021405', { code: '021405', name: 'Cochas' });
district.set('021406', { code: '021406', name: 'Congas' });
district.set('021407', { code: '021407', name: 'Llipa' });
district.set('021408', { code: '021408', name: 'San Cristóbal de Rajan' });
district.set('021409', { code: '021409', name: 'San Pedro' });
district.set('021410', { code: '021410', name: 'Santiago de Chilcas' });
// 0215 - Pallasca
district.set('021501', { code: '021501', name: 'Cabana' });
district.set('021502', { code: '021502', name: 'Bolognesi' });
district.set('021503', { code: '021503', name: 'Conchucos' });
district.set('021504', { code: '021504', name: 'Huacaschuque' });
district.set('021505', { code: '021505', name: 'Huandoval' });
district.set('021506', { code: '021506', name: 'Lacabamba' });
district.set('021507', { code: '021507', name: 'Llapo' });
district.set('021508', { code: '021508', name: 'Pallasca' });
district.set('021509', { code: '021509', name: 'Pampas' });
district.set('021510', { code: '021510', name: 'Santa Rosa' });
district.set('021511', { code: '021511', name: 'Tauca' });
// 0216 - Pomabamba
district.set('021601', { code: '021601', name: 'Pomabamba' });
district.set('021602', { code: '021602', name: 'Huayllan' });
district.set('021603', { code: '021603', name: 'Parobamba' });
district.set('021604', { code: '021604', name: 'Quinuabamba' });
// 0217 - Recuay
district.set('021701', { code: '021701', name: 'Recuay' });
district.set('021702', { code: '021702', name: 'Catac' });
district.set('021703', { code: '021703', name: 'Cotaparaco' });
district.set('021704', { code: '021704', name: 'Huayllapampa' });
district.set('021705', { code: '021705', name: 'Llacllin' });
district.set('021706', { code: '021706', name: 'Marca' });
district.set('021707', { code: '021707', name: 'Pampas Chico' });
district.set('021708', { code: '021708', name: 'Pararin' });
district.set('021709', { code: '021709', name: 'Tapacocha' });
district.set('021710', { code: '021710', name: 'Ticapampa' });
// 0218 - Santa
district.set('021801', { code: '021801', name: 'Chimbote' });
district.set('021802', { code: '021802', name: 'Cáceres del Perú' });
district.set('021803', { code: '021803', name: 'Coishco' });
district.set('021804', { code: '021804', name: 'Macate' });
district.set('021805', { code: '021805', name: 'Moro' });
district.set('021806', { code: '021806', name: 'Nepeña' });
district.set('021807', { code: '021807', name: 'Samanco' });
district.set('021808', { code: '021808', name: 'Santa' });
district.set('021809', { code: '021809', name: 'Nuevo Chimbote' });
// 0219 - Sihuas
district.set('021901', { code: '021901', name: 'Sihuas' });
district.set('021902', { code: '021902', name: 'Acobamba' });
district.set('021903', { code: '021903', name: 'Alfonso Ugarte' });
district.set('021904', { code: '021904', name: 'Cashapampa' });
district.set('021905', { code: '021905', name: 'Chingalpo' });
district.set('021906', { code: '021906', name: 'Huayllabamba' });
district.set('021907', { code: '021907', name: 'Quiches' });
district.set('021908', { code: '021908', name: 'Ragash' });
district.set('021909', { code: '021909', name: 'San Juan' });
district.set('021910', { code: '021910', name: 'Sicsibamba' });
// 0220 - Yungay
district.set('022001', { code: '022001', name: 'Yungay' });
district.set('022002', { code: '022002', name: 'Cascapara' });
district.set('022003', { code: '022003', name: 'Mancos' });
district.set('022004', { code: '022004', name: 'Matacoto' });
district.set('022005', { code: '022005', name: 'Quillo' });
district.set('022006', { code: '022006', name: 'Ranrahirca' });
district.set('022007', { code: '022007', name: 'Shupluy' });
district.set('022008', { code: '022008', name: 'Yanama' });
// 03 - Apurímac
// 0301 - Abancay
district.set('030101', { code: '030101', name: 'Abancay' });
district.set('030102', { code: '030102', name: 'Chacoche' });
district.set('030103', { code: '030103', name: 'Circa' });
district.set('030104', { code: '030104', name: 'Curahuasi' });
district.set('030105', { code: '030105', name: 'Huanipaca' });
district.set('030106', { code: '030106', name: 'Lambrama' });
district.set('030107', { code: '030107', name: 'Pichirhua' });
district.set('030108', { code: '030108', name: 'San Pedro de Cachora' });
district.set('030109', { code: '030109', name: 'Tamburco' });
// 0302 - Andahuaylas
district.set('030201', { code: '030201', name: 'Andahuaylas' });
district.set('030202', { code: '030202', name: 'Andarapa' });
district.set('030203', { code: '030203', name: 'Chiara' });
district.set('030204', { code: '030204', name: 'Huancarama' });
district.set('030205', { code: '030205', name: 'Huancaray' });
district.set('030206', { code: '030206', name: 'Huayana' });
district.set('030207', { code: '030207', name: 'Kishuara' });
district.set('030208', { code: '030208', name: 'Pacobamba' });
district.set('030209', { code: '030209', name: 'Pacucha' });
district.set('030210', { code: '030210', name: 'Pampachiri' });
district.set('030211', { code: '030211', name: 'Pomacocha' });
district.set('030212', { code: '030212', name: 'San Antonio de Cachi' });
district.set('030213', { code: '030213', name: 'San Jerónimo' });
district.set('030214', { code: '030214', name: 'San Miguel de Chaccrampa' });
district.set('030215', { code: '030215', name: 'Santa María de Chicmo' });
district.set('030216', { code: '030216', name: 'Talavera' });
district.set('030217', { code: '030217', name: 'Tumay Huaraca' });
district.set('030218', { code: '030218', name: 'Turpo' });
district.set('030219', { code: '030219', name: 'Kaquiabamba' });
district.set('030220', { code: '030220', name: 'José María Arguedas' });
// 0303 - Antabamba
district.set('030301', { code: '030301', name: 'Antabamba' });
district.set('030302', { code: '030302', name: 'El Oro' });
district.set('030303', { code: '030303', name: 'Huaquirca' });
district.set('030304', { code: '030304', name: 'Juan Espinoza Medrano' });
district.set('030305', { code: '030305', name: 'Oropesa' });
district.set('030306', { code: '030306', name: 'Pachaconas' });
district.set('030307', { code: '030307', name: 'Sabaino' });
// 0304 - Aymaraes
district.set('030401', { code: '030401', name: 'Chalhuanca' });
district.set('030402', { code: '030402', name: 'Capaya' });
district.set('030403', { code: '030403', name: 'Caraybamba' });
district.set('030404', { code: '030404', name: 'Chapimarca' });
district.set('030405', { code: '030405', name: 'Colcabamba' });
district.set('030406', { code: '030406', name: 'Cotaruse' });
district.set('030407', { code: '030407', name: 'Ihuayllo' });
district.set('030408', { code: '030408', name: 'Justo Apu Sahuaraura' });
district.set('030409', { code: '030409', name: 'Lucre' });
district.set('030410', { code: '030410', name: 'Pocohuanca' });
district.set('030411', { code: '030411', name: 'San Juan de Chacña' });
district.set('030412', { code: '030412', name: 'Sañayca' });
district.set('030413', { code: '030413', name: 'Soraya' });
district.set('030414', { code: '030414', name: 'Tapairihua' });
district.set('030415', { code: '030415', name: 'Tintay' });
district.set('030416', { code: '030416', name: 'Toraya' });
district.set('030417', { code: '030417', name: 'Yanaca' });
// 0305 - Cotabambas
district.set('030501', { code: '030501', name: 'Tambobamba' });
district.set('030502', { code: '030502', name: 'Cotabambas' });
district.set('030503', { code: '030503', name: 'Coyllurqui' });
district.set('030504', { code: '030504', name: 'Haquira' });
district.set('030505', { code: '030505', name: 'Mara' });
district.set('030506', { code: '030506', name: 'Challhuahuacho' });
// 0306 - Chincheros
district.set('030601', { code: '030601', name: 'Chincheros' });
district.set('030602', { code: '030602', name: 'Anco_Huallo' });
district.set('030603', { code: '030603', name: 'Cocharcas' });
district.set('030604', { code: '030604', name: 'Huaccana' });
district.set('030605', { code: '030605', name: 'Ocobamba' });
district.set('030606', { code: '030606', name: 'Ongoy' });
district.set('030607', { code: '030607', name: 'Uranmarca' });
district.set('030608', { code: '030608', name: 'Ranracancha' });
district.set('030609', { code: '030609', name: 'Rocchacc' });
district.set('030610', { code: '030610', name: 'El Porvenir' });
// 0307 - Grau
district.set('030701', { code: '030701', name: 'Chuquibambilla' });
district.set('030702', { code: '030702', name: 'Curpahuasi' });
district.set('030703', { code: '030703', name: 'Gamarra' });
district.set('030704', { code: '030704', name: 'Huayllati' });
district.set('030705', { code: '030705', name: 'Mamara' });
district.set('030706', { code: '030706', name: 'Micaela Bastidas' });
district.set('030707', { code: '030707', name: 'Pataypampa' });
district.set('030708', { code: '030708', name: 'Progreso' });
district.set('030709', { code: '030709', name: 'San Antonio' });
district.set('030710', { code: '030710', name: 'Santa Rosa' });
district.set('030711', { code: '030711', name: 'Turpay' });
district.set('030712', { code: '030712', name: 'Vilcabamba' });
district.set('030713', { code: '030713', name: 'Virundo' });
district.set('030714', { code: '030714', name: 'Curasco' });
// 04 - Arequipa
// 0401 - Arequipa
district.set('040101', { code: '040101', name: 'Arequipa' });
district.set('040102', { code: '040102', name: 'Alto Selva Alegre' });
district.set('040103', { code: '040103', name: 'Cayma' });
district.set('040104', { code: '040104', name: 'Cerro Colorado' });
district.set('040105', { code: '040105', name: 'Characato' });
district.set('040106', { code: '040106', name: 'Chiguata' });
district.set('040107', { code: '040107', name: 'Jacobo Hunter' });
district.set('040108', { code: '040108', name: 'La Joya' });
district.set('040109', { code: '040109', name: 'Mariano Melgar' });
district.set('040110', { code: '040110', name: 'Miraflores' });
district.set('040111', { code: '040111', name: 'Mollebaya' });
district.set('040112', { code: '040112', name: 'Paucarpata' });
district.set('040113', { code: '040113', name: 'Pocsi' });
district.set('040114', { code: '040114', name: 'Polobaya' });
district.set('040115', { code: '040115', name: 'Quequeña' });
district.set('040116', { code: '040116', name: 'Sabandia' });
district.set('040117', { code: '040117', name: 'Sachaca' });
district.set('040118', { code: '040118', name: 'San Juan de Siguas' });
district.set('040119', { code: '040119', name: 'San Juan de Tarucani' });
district.set('040120', { code: '040120', name: 'Santa Isabel de Siguas' });
district.set('040121', { code: '040121', name: 'Santa Rita de Siguas' });
district.set('040122', { code: '040122', name: 'Socabaya' });
district.set('040123', { code: '040123', name: 'Tiabaya' });
district.set('040124', { code: '040124', name: 'Uchumayo' });
district.set('040125', { code: '040125', name: 'Vitor' });
district.set('040126', { code: '040126', name: 'Yanahuara' });
district.set('040127', { code: '040127', name: 'Yarabamba' });
district.set('040128', { code: '040128', name: 'Yura' });
district.set('040129', {
  code: '040129',
  name: 'José Luis Bustamante Y Rivero',
});
// 0402 - Camaná
district.set('040201', { code: '040201', name: 'Camaná' });
district.set('040202', { code: '040202', name: 'José María Quimper' });
district.set('040203', { code: '040203', name: 'Mariano Nicolás Valcárcel' });
district.set('040204', { code: '040204', name: 'Mariscal Cáceres' });
district.set('040205', { code: '040205', name: 'Nicolás de Pierola' });
district.set('040206', { code: '040206', name: 'Ocoña' });
district.set('040207', { code: '040207', name: 'Quilca' });
district.set('040208', { code: '040208', name: 'Samuel Pastor' });
// 0403 - Caravelí
district.set('040301', { code: '040301', name: 'Caravelí' });
district.set('040302', { code: '040302', name: 'Acarí' });
district.set('040303', { code: '040303', name: 'Atico' });
district.set('040304', { code: '040304', name: 'Atiquipa' });
district.set('040305', { code: '040305', name: 'Bella Unión' });
district.set('040306', { code: '040306', name: 'Cahuacho' });
district.set('040307', { code: '040307', name: 'Chala' });
district.set('040308', { code: '040308', name: 'Chaparra' });
district.set('040309', { code: '040309', name: 'Huanuhuanu' });
district.set('040310', { code: '040310', name: 'Jaqui' });
district.set('040311', { code: '040311', name: 'Lomas' });
district.set('040312', { code: '040312', name: 'Quicacha' });
district.set('040313', { code: '040313', name: 'Yauca' });
// 0404 - Castilla
district.set('040401', { code: '040401', name: 'Aplao' });
district.set('040402', { code: '040402', name: 'Andagua' });
district.set('040403', { code: '040403', name: 'Ayo' });
district.set('040404', { code: '040404', name: 'Chachas' });
district.set('040405', { code: '040405', name: 'Chilcaymarca' });
district.set('040406', { code: '040406', name: 'Choco' });
district.set('040407', { code: '040407', name: 'Huancarqui' });
district.set('040408', { code: '040408', name: 'Machaguay' });
district.set('040409', { code: '040409', name: 'Orcopampa' });
district.set('040410', { code: '040410', name: 'Pampacolca' });
district.set('040411', { code: '040411', name: 'Tipan' });
district.set('040412', { code: '040412', name: 'Uñon' });
district.set('040413', { code: '040413', name: 'Uraca' });
district.set('040414', { code: '040414', name: 'Viraco' });
// 0405 - Caylloma
district.set('040501', { code: '040501', name: 'Chivay' });
district.set('040502', { code: '040502', name: 'Achoma' });
district.set('040503', { code: '040503', name: 'Cabanaconde' });
district.set('040504', { code: '040504', name: 'Callalli' });
district.set('040505', { code: '040505', name: 'Caylloma' });
district.set('040506', { code: '040506', name: 'Coporaque' });
district.set('040507', { code: '040507', name: 'Huambo' });
district.set('040508', { code: '040508', name: 'Huanca' });
district.set('040509', { code: '040509', name: 'Ichupampa' });
district.set('040510', { code: '040510', name: 'Lari' });
district.set('040511', { code: '040511', name: 'Lluta' });
district.set('040512', { code: '040512', name: 'Maca' });
district.set('040513', { code: '040513', name: 'Madrigal' });
district.set('040514', { code: '040514', name: 'San Antonio de Chuca' });
district.set('040515', { code: '040515', name: 'Sibayo' });
district.set('040516', { code: '040516', name: 'Tapay' });
district.set('040517', { code: '040517', name: 'Tisco' });
district.set('040518', { code: '040518', name: 'Tuti' });
district.set('040519', { code: '040519', name: 'Yanque' });
district.set('040520', { code: '040520', name: 'Majes' });
// 0406 - Condesuyos
district.set('040601', { code: '040601', name: 'Chuquibamba' });
district.set('040602', { code: '040602', name: 'Andaray' });
district.set('040603', { code: '040603', name: 'Cayarani' });
district.set('040604', { code: '040604', name: 'Chichas' });
district.set('040605', { code: '040605', name: 'Iray' });
district.set('040606', { code: '040606', name: 'Río Grande' });
district.set('040607', { code: '040607', name: 'Salamanca' });
district.set('040608', { code: '040608', name: 'Yanaquihua' });
// 0407 - Islay
district.set('040701', { code: '040701', name: 'Mollendo' });
district.set('040702', { code: '040702', name: 'Cocachacra' });
district.set('040703', { code: '040703', name: 'Dean Valdivia' });
district.set('040704', { code: '040704', name: 'Islay' });
district.set('040705', { code: '040705', name: 'Mejia' });
district.set('040706', { code: '040706', name: 'Punta de Bombón' });
// 0408 - La Uniòn
district.set('040801', { code: '040801', name: 'Cotahuasi' });
district.set('040802', { code: '040802', name: 'Alca' });
district.set('040803', { code: '040803', name: 'Charcana' });
district.set('040804', { code: '040804', name: 'Huaynacotas' });
district.set('040805', { code: '040805', name: 'Pampamarca' });
district.set('040806', { code: '040806', name: 'Puyca' });
district.set('040807', { code: '040807', name: 'Quechualla' });
district.set('040808', { code: '040808', name: 'Sayla' });
district.set('040809', { code: '040809', name: 'Tauria' });
district.set('040810', { code: '040810', name: 'Tomepampa' });
district.set('040811', { code: '040811', name: 'Toro' });
// 05 - Ayacucho
// 0501 - Huamanga
district.set('050101', { code: '050101', name: 'Ayacucho' });
district.set('050102', { code: '050102', name: 'Acocro' });
district.set('050103', { code: '050103', name: 'Acos Vinchos' });
district.set('050104', { code: '050104', name: 'Carmen Alto' });
district.set('050105', { code: '050105', name: 'Chiara' });
district.set('050106', { code: '050106', name: 'Ocros' });
district.set('050107', { code: '050107', name: 'Pacaycasa' });
district.set('050108', { code: '050108', name: 'Quinua' });
district.set('050109', { code: '050109', name: 'San José de Ticllas' });
district.set('050110', { code: '050110', name: 'San Juan Bautista' });
district.set('050111', { code: '050111', name: 'Santiago de Pischa' });
district.set('050112', { code: '050112', name: 'Socos' });
district.set('050113', { code: '050113', name: 'Tambillo' });
district.set('050114', { code: '050114', name: 'Vinchos' });
district.set('050115', { code: '050115', name: 'Jesús Nazareno' });
district.set('050116', {
  code: '050116',
  name: 'Andrés Avelino Cáceres Dorregaray',
});
// 0502 - Cangallo
district.set('050201', { code: '050201', name: 'Cangallo' });
district.set('050202', { code: '050202', name: 'Chuschi' });
district.set('050203', { code: '050203', name: 'Los Morochucos' });
district.set('050204', { code: '050204', name: 'María Parado de Bellido' });
district.set('050205', { code: '050205', name: 'Paras' });
district.set('050206', { code: '050206', name: 'Totos' });
// 0503 - Huanca Sancos
district.set('050301', { code: '050301', name: 'Sancos' });
district.set('050302', { code: '050302', name: 'Carapo' });
district.set('050303', { code: '050303', name: 'Sacsamarca' });
district.set('050304', { code: '050304', name: 'Santiago de Lucanamarca' });
// 0504 - Huanta
district.set('050401', { code: '050401', name: 'Huanta' });
district.set('050402', { code: '050402', name: 'Ayahuanco' });
district.set('050403', { code: '050403', name: 'Huamanguilla' });
district.set('050404', { code: '050404', name: 'Iguain' });
district.set('050405', { code: '050405', name: 'Luricocha' });
district.set('050406', { code: '050406', name: 'Santillana' });
district.set('050407', { code: '050407', name: 'Sivia' });
district.set('050408', { code: '050408', name: 'Llochegua' });
district.set('050409', { code: '050409', name: 'Canayre' });
district.set('050410', { code: '050410', name: 'Uchuraccay' });
district.set('050411', { code: '050411', name: 'Pucacolpa' });
district.set('050412', { code: '050412', name: 'Chaca' });
// 0505 - La Mar
district.set('050501', { code: '050501', name: 'San Miguel' });
district.set('050502', { code: '050502', name: 'Anco' });
district.set('050503', { code: '050503', name: 'Ayna' });
district.set('050504', { code: '050504', name: 'Chilcas' });
district.set('050505', { code: '050505', name: 'Chungui' });
district.set('050506', { code: '050506', name: 'Luis Carranza' });
district.set('050507', { code: '050507', name: 'Santa Rosa' });
district.set('050508', { code: '050508', name: 'Tambo' });
district.set('050509', { code: '050509', name: 'Samugari' });
district.set('050510', { code: '050510', name: 'Anchihuay' });
// 0506 - Lucanas
district.set('050601', { code: '050601', name: 'Puquio' });
district.set('050602', { code: '050602', name: 'Aucara' });
district.set('050603', { code: '050603', name: 'Cabana' });
district.set('050604', { code: '050604', name: 'Carmen Salcedo' });
district.set('050605', { code: '050605', name: 'Chaviña' });
district.set('050606', { code: '050606', name: 'Chipao' });
district.set('050607', { code: '050607', name: 'Huac-Huas' });
district.set('050608', { code: '050608', name: 'Laramate' });
district.set('050609', { code: '050609', name: 'Leoncio Prado' });
district.set('050610', { code: '050610', name: 'Llauta' });
district.set('050611', { code: '050611', name: 'Lucanas' });
district.set('050612', { code: '050612', name: 'Ocaña' });
district.set('050613', { code: '050613', name: 'Otoca' });
district.set('050614', { code: '050614', name: 'Saisa' });
district.set('050615', { code: '050615', name: 'San Cristóbal' });
district.set('050616', { code: '050616', name: 'San Juan' });
district.set('050617', { code: '050617', name: 'San Pedro' });
district.set('050618', { code: '050618', name: 'San Pedro de Palco' });
district.set('050619', { code: '050619', name: 'Sancos' });
district.set('050620', { code: '050620', name: 'Santa Ana de Huaycahuacho' });
district.set('050621', { code: '050621', name: 'Santa Lucia' });
// 0507 - Parinacochas
district.set('050701', { code: '050701', name: 'Coracora' });
district.set('050702', { code: '050702', name: 'Chumpi' });
district.set('050703', { code: '050703', name: 'Coronel Castañeda' });
district.set('050704', { code: '050704', name: 'Pacapausa' });
district.set('050705', { code: '050705', name: 'Pullo' });
district.set('050706', { code: '050706', name: 'Puyusca' });
district.set('050707', { code: '050707', name: 'San Francisco de Ravacayco' });
district.set('050708', { code: '050708', name: 'Upahuacho' });
// 0508 - Pàucar del Sara Sara
district.set('050801', { code: '050801', name: 'Pausa' });
district.set('050802', { code: '050802', name: 'Colta' });
district.set('050803', { code: '050803', name: 'Corculla' });
district.set('050804', { code: '050804', name: 'Lampa' });
district.set('050805', { code: '050805', name: 'Marcabamba' });
district.set('050806', { code: '050806', name: 'Oyolo' });
district.set('050807', { code: '050807', name: 'Pararca' });
district.set('050808', { code: '050808', name: 'San Javier de Alpabamba' });
district.set('050809', { code: '050809', name: 'San José de Ushua' });
district.set('050810', { code: '050810', name: 'Sara Sara' });
// 0509 - Sucre
district.set('050901', { code: '050901', name: 'Querobamba' });
district.set('050902', { code: '050902', name: 'Belén' });
district.set('050903', { code: '050903', name: 'Chalcos' });
district.set('050904', { code: '050904', name: 'Chilcayoc' });
district.set('050905', { code: '050905', name: 'Huacaña' });
district.set('050906', { code: '050906', name: 'Morcolla' });
district.set('050907', { code: '050907', name: 'Paico' });
district.set('050908', { code: '050908', name: 'San Pedro de Larcay' });
district.set('050909', { code: '050909', name: 'San Salvador de Quije' });
district.set('050910', { code: '050910', name: 'Santiago de Paucaray' });
district.set('050911', { code: '050911', name: 'Soras' });
// 0510 - Víctor Fajardo
district.set('051001', { code: '051001', name: 'Huancapi' });
district.set('051002', { code: '051002', name: 'Alcamenca' });
district.set('051003', { code: '051003', name: 'Apongo' });
district.set('051004', { code: '051004', name: 'Asquipata' });
district.set('051005', { code: '051005', name: 'Canaria' });
district.set('051006', { code: '051006', name: 'Cayara' });
district.set('051007', { code: '051007', name: 'Colca' });
district.set('051008', { code: '051008', name: 'Huamanquiquia' });
district.set('051009', { code: '051009', name: 'Huancaraylla' });
district.set('051010', { code: '051010', name: 'Huaya' });
district.set('051011', { code: '051011', name: 'Sarhua' });
district.set('051012', { code: '051012', name: 'Vilcanchos' });
// 0511 - Vilcas Huamán
district.set('051101', { code: '051101', name: 'Vilcas Huaman' });
district.set('051102', { code: '051102', name: 'Accomarca' });
district.set('051103', { code: '051103', name: 'Carhuanca' });
district.set('051104', { code: '051104', name: 'Concepción' });
district.set('051105', { code: '051105', name: 'Huambalpa' });
district.set('051106', { code: '051106', name: 'Independencia' });
district.set('051107', { code: '051107', name: 'Saurama' });
district.set('051108', { code: '051108', name: 'Vischongo' });
// 06 - Cajamarca
// 0601 - Cajamarca
district.set('060101', { code: '060101', name: 'Cajamarca' });
district.set('060102', { code: '060102', name: 'Asunción' });
district.set('060103', { code: '060103', name: 'Chetilla' });
district.set('060104', { code: '060104', name: 'Cospan' });
district.set('060105', { code: '060105', name: 'Encañada' });
district.set('060106', { code: '060106', name: 'Jesús' });
district.set('060107', { code: '060107', name: 'Llacanora' });
district.set('060108', { code: '060108', name: 'Los Baños del Inca' });
district.set('060109', { code: '060109', name: 'Magdalena' });
district.set('060110', { code: '060110', name: 'Matara' });
district.set('060111', { code: '060111', name: 'Namora' });
district.set('060112', { code: '060112', name: 'San Juan' });
// 0602 - Cajabamba
district.set('060201', { code: '060201', name: 'Cajabamba' });
district.set('060202', { code: '060202', name: 'Cachachi' });
district.set('060203', { code: '060203', name: 'Condebamba' });
district.set('060204', { code: '060204', name: 'Sitacocha' });
// 0603 - Celendín
district.set('060301', { code: '060301', name: 'Celendín' });
district.set('060302', { code: '060302', name: 'Chumuch' });
district.set('060303', { code: '060303', name: 'Cortegana' });
district.set('060304', { code: '060304', name: 'Huasmin' });
district.set('060305', { code: '060305', name: 'Jorge Chávez' });
district.set('060306', { code: '060306', name: 'José Gálvez' });
district.set('060307', { code: '060307', name: 'Miguel Iglesias' });
district.set('060308', { code: '060308', name: 'Oxamarca' });
district.set('060309', { code: '060309', name: 'Sorochuco' });
district.set('060310', { code: '060310', name: 'Sucre' });
district.set('060311', { code: '060311', name: 'Utco' });
district.set('060312', { code: '060312', name: 'La Libertad de Pallan' });
// 0604 - Chota
district.set('060401', { code: '060401', name: 'Chota' });
district.set('060402', { code: '060402', name: 'Anguia' });
district.set('060403', { code: '060403', name: 'Chadin' });
district.set('060404', { code: '060404', name: 'Chiguirip' });
district.set('060405', { code: '060405', name: 'Chimban' });
district.set('060406', { code: '060406', name: 'Choropampa' });
district.set('060407', { code: '060407', name: 'Cochabamba' });
district.set('060408', { code: '060408', name: 'Conchan' });
district.set('060409', { code: '060409', name: 'Huambos' });
district.set('060410', { code: '060410', name: 'Lajas' });
district.set('060411', { code: '060411', name: 'Llama' });
district.set('060412', { code: '060412', name: 'Miracosta' });
district.set('060413', { code: '060413', name: 'Paccha' });
district.set('060414', { code: '060414', name: 'Pion' });
district.set('060415', { code: '060415', name: 'Querocoto' });
district.set('060416', { code: '060416', name: 'San Juan de Licupis' });
district.set('060417', { code: '060417', name: 'Tacabamba' });
district.set('060418', { code: '060418', name: 'Tocmoche' });
district.set('060419', { code: '060419', name: 'Chalamarca' });
// 0605 - Contumazá
district.set('060501', { code: '060501', name: 'Contumaza' });
district.set('060502', { code: '060502', name: 'Chilete' });
district.set('060503', { code: '060503', name: 'Cupisnique' });
district.set('060504', { code: '060504', name: 'Guzmango' });
district.set('060505', { code: '060505', name: 'San Benito' });
district.set('060506', { code: '060506', name: 'Santa Cruz de Toledo' });
district.set('060507', { code: '060507', name: 'Tantarica' });
district.set('060508', { code: '060508', name: 'Yonan' });
// 0606 - Cutervo
district.set('060601', { code: '060601', name: 'Cutervo' });
district.set('060602', { code: '060602', name: 'Callayuc' });
district.set('060603', { code: '060603', name: 'Choros' });
district.set('060604', { code: '060604', name: 'Cujillo' });
district.set('060605', { code: '060605', name: 'La Ramada' });
district.set('060606', { code: '060606', name: 'Pimpingos' });
district.set('060607', { code: '060607', name: 'Querocotillo' });
district.set('060608', { code: '060608', name: 'San Andrés de Cutervo' });
district.set('060609', { code: '060609', name: 'San Juan de Cutervo' });
district.set('060610', { code: '060610', name: 'San Luis de Lucma' });
district.set('060611', { code: '060611', name: 'Santa Cruz' });
district.set('060612', { code: '060612', name: 'Santo Domingo de la Capilla' });
district.set('060613', { code: '060613', name: 'Santo Tomas' });
district.set('060614', { code: '060614', name: 'Socota' });
district.set('060615', { code: '060615', name: 'Toribio Casanova' });
// 0607 - Hualgayoc
district.set('060701', { code: '060701', name: 'Bambamarca' });
district.set('060702', { code: '060702', name: 'Chugur' });
district.set('060703', { code: '060703', name: 'Hualgayoc' });
// 0608 - Jaén
district.set('060801', { code: '060801', name: 'Jaén' });
district.set('060802', { code: '060802', name: 'Bellavista' });
district.set('060803', { code: '060803', name: 'Chontali' });
district.set('060804', { code: '060804', name: 'Colasay' });
district.set('060805', { code: '060805', name: 'Huabal' });
district.set('060806', { code: '060806', name: 'Las Pirias' });
district.set('060807', { code: '060807', name: 'Pomahuaca' });
district.set('060808', { code: '060808', name: 'Pucara' });
district.set('060809', { code: '060809', name: 'Sallique' });
district.set('060810', { code: '060810', name: 'San Felipe' });
district.set('060811', { code: '060811', name: 'San José del Alto' });
district.set('060812', { code: '060812', name: 'Santa Rosa' });
// 0609 - San Ignacio
district.set('060901', { code: '060901', name: 'San Ignacio' });
district.set('060902', { code: '060902', name: 'Chirinos' });
district.set('060903', { code: '060903', name: 'Huarango' });
district.set('060904', { code: '060904', name: 'La Coipa' });
district.set('060905', { code: '060905', name: 'Namballe' });
district.set('060906', { code: '060906', name: 'San José de Lourdes' });
district.set('060907', { code: '060907', name: 'Tabaconas' });
// 0610 - San Marcos
district.set('061001', { code: '061001', name: 'Pedro Gálvez' });
district.set('061002', { code: '061002', name: 'Chancay' });
district.set('061003', { code: '061003', name: 'Eduardo Villanueva' });
district.set('061004', { code: '061004', name: 'Gregorio Pita' });
district.set('061005', { code: '061005', name: 'Ichocan' });
district.set('061006', { code: '061006', name: 'José Manuel Quiroz' });
district.set('061007', { code: '061007', name: 'José Sabogal' });
// 0611 - San Miguel
district.set('061101', { code: '061101', name: 'San Miguel' });
district.set('061102', { code: '061102', name: 'Bolívar' });
district.set('061103', { code: '061103', name: 'Calquis' });
district.set('061104', { code: '061104', name: 'Catilluc' });
district.set('061105', { code: '061105', name: 'El Prado' });
district.set('061106', { code: '061106', name: 'La Florida' });
district.set('061107', { code: '061107', name: 'Llapa' });
district.set('061108', { code: '061108', name: 'Nanchoc' });
district.set('061109', { code: '061109', name: 'Niepos' });
district.set('061110', { code: '061110', name: 'San Gregorio' });
district.set('061111', { code: '061111', name: 'San Silvestre de Cochan' });
district.set('061112', { code: '061112', name: 'Tongod' });
district.set('061113', { code: '061113', name: 'Unión Agua Blanca' });
// 0612 - San Pablo
district.set('061201', { code: '061201', name: 'San Pablo' });
district.set('061202', { code: '061202', name: 'San Bernardino' });
district.set('061203', { code: '061203', name: 'San Luis' });
district.set('061204', { code: '061204', name: 'Tumbaden' });
// 0613 - Santa Cruz
district.set('061301', { code: '061301', name: 'Santa Cruz' });
district.set('061302', { code: '061302', name: 'Andabamba' });
district.set('061303', { code: '061303', name: 'Catache' });
district.set('061304', { code: '061304', name: 'Chancaybaños' });
district.set('061305', { code: '061305', name: 'La Esperanza' });
district.set('061306', { code: '061306', name: 'Ninabamba' });
district.set('061307', { code: '061307', name: 'Pulan' });
district.set('061308', { code: '061308', name: 'Saucepampa' });
district.set('061309', { code: '061309', name: 'Sexi' });
district.set('061310', { code: '061310', name: 'Uticyacu' });
district.set('061311', { code: '061311', name: 'Yauyucan' });
// 07 - Callao
// 0701 - Prov. Const. del Callao
district.set('070101', { code: '070101', name: 'Callao' });
district.set('070102', { code: '070102', name: 'Bellavista' });
district.set('070103', { code: '070103', name: 'Carmen de la Legua Reynoso' });
district.set('070104', { code: '070104', name: 'La Perla' });
district.set('070105', { code: '070105', name: 'La Punta' });
district.set('070106', { code: '070106', name: 'Ventanilla' });
district.set('070107', { code: '070107', name: 'Mi Perú' });
// 08 - Cusco
// 0801 - Cusco
district.set('080101', { code: '080101', name: 'Cusco' });
district.set('080102', { code: '080102', name: 'Ccorca' });
district.set('080103', { code: '080103', name: 'Poroy' });
district.set('080104', { code: '080104', name: 'San Jerónimo' });
district.set('080105', { code: '080105', name: 'San Sebastian' });
district.set('080106', { code: '080106', name: 'Santiago' });
district.set('080107', { code: '080107', name: 'Saylla' });
district.set('080108', { code: '080108', name: 'Wanchaq' });
// 0802 - Acomayo
district.set('080201', { code: '080201', name: 'Acomayo' });
district.set('080202', { code: '080202', name: 'Acopia' });
district.set('080203', { code: '080203', name: 'Acos' });
district.set('080204', { code: '080204', name: 'Mosoc Llacta' });
district.set('080205', { code: '080205', name: 'Pomacanchi' });
district.set('080206', { code: '080206', name: 'Rondocan' });
district.set('080207', { code: '080207', name: 'Sangarara' });
// 0803 - Anta
district.set('080301', { code: '080301', name: 'Anta' });
district.set('080302', { code: '080302', name: 'Ancahuasi' });
district.set('080303', { code: '080303', name: 'Cachimayo' });
district.set('080304', { code: '080304', name: 'Chinchaypujio' });
district.set('080305', { code: '080305', name: 'Huarocondo' });
district.set('080306', { code: '080306', name: 'Limatambo' });
district.set('080307', { code: '080307', name: 'Mollepata' });
district.set('080308', { code: '080308', name: 'Pucyura' });
district.set('080309', { code: '080309', name: 'Zurite' });
// 0804 - Calca
district.set('080401', { code: '080401', name: 'Calca' });
district.set('080402', { code: '080402', name: 'Coya' });
district.set('080403', { code: '080403', name: 'Lamay' });
district.set('080404', { code: '080404', name: 'Lares' });
district.set('080405', { code: '080405', name: 'Pisac' });
district.set('080406', { code: '080406', name: 'San Salvador' });
district.set('080407', { code: '080407', name: 'Taray' });
district.set('080408', { code: '080408', name: 'Yanatile' });
// 0805 - Canas
district.set('080501', { code: '080501', name: 'Yanaoca' });
district.set('080502', { code: '080502', name: 'Checca' });
district.set('080503', { code: '080503', name: 'Kunturkanki' });
district.set('080504', { code: '080504', name: 'Langui' });
district.set('080505', { code: '080505', name: 'Layo' });
district.set('080506', { code: '080506', name: 'Pampamarca' });
district.set('080507', { code: '080507', name: 'Quehue' });
district.set('080508', { code: '080508', name: 'Tupac Amaru' });
// 0806 - Canchis
district.set('080601', { code: '080601', name: 'Sicuani' });
district.set('080602', { code: '080602', name: 'Checacupe' });
district.set('080603', { code: '080603', name: 'Combapata' });
district.set('080604', { code: '080604', name: 'Marangani' });
district.set('080605', { code: '080605', name: 'Pitumarca' });
district.set('080606', { code: '080606', name: 'San Pablo' });
district.set('080607', { code: '080607', name: 'San Pedro' });
district.set('080608', { code: '080608', name: 'Tinta' });
// 0807 - Chumbivilcas
district.set('080701', { code: '080701', name: 'Santo Tomas' });
district.set('080702', { code: '080702', name: 'Capacmarca' });
district.set('080703', { code: '080703', name: 'Chamaca' });
district.set('080704', { code: '080704', name: 'Colquemarca' });
district.set('080705', { code: '080705', name: 'Livitaca' });
district.set('080706', { code: '080706', name: 'Llusco' });
district.set('080707', { code: '080707', name: 'Quiñota' });
district.set('080708', { code: '080708', name: 'Velille' });
// 0808 - Espinar
district.set('080801', { code: '080801', name: 'Espinar' });
district.set('080802', { code: '080802', name: 'Condoroma' });
district.set('080803', { code: '080803', name: 'Coporaque' });
district.set('080804', { code: '080804', name: 'Ocoruro' });
district.set('080805', { code: '080805', name: 'Pallpata' });
district.set('080806', { code: '080806', name: 'Pichigua' });
district.set('080807', { code: '080807', name: 'Suyckutambo' });
district.set('080808', { code: '080808', name: 'Alto Pichigua' });
// 0809 - La Convención
district.set('080901', { code: '080901', name: 'Santa Ana' });
district.set('080902', { code: '080902', name: 'Echarate' });
district.set('080903', { code: '080903', name: 'Huayopata' });
district.set('080904', { code: '080904', name: 'Maranura' });
district.set('080905', { code: '080905', name: 'Ocobamba' });
district.set('080906', { code: '080906', name: 'Quellouno' });
district.set('080907', { code: '080907', name: 'Kimbiri' });
district.set('080908', { code: '080908', name: 'Santa Teresa' });
district.set('080909', { code: '080909', name: 'Vilcabamba' });
district.set('080910', { code: '080910', name: 'Pichari' });
district.set('080911', { code: '080911', name: 'Inkawasi' });
district.set('080912', { code: '080912', name: 'Villa Virgen' });
district.set('080913', { code: '080913', name: 'Villa Kintiarina' });
// 0810 - Paruro
district.set('081001', { code: '081001', name: 'Paruro' });
district.set('081002', { code: '081002', name: 'Accha' });
district.set('081003', { code: '081003', name: 'Ccapi' });
district.set('081004', { code: '081004', name: 'Colcha' });
district.set('081005', { code: '081005', name: 'Huanoquite' });
district.set('081006', { code: '081006', name: 'Omacha' });
district.set('081007', { code: '081007', name: 'Paccaritambo' });
district.set('081008', { code: '081008', name: 'Pillpinto' });
district.set('081009', { code: '081009', name: 'Yaurisque' });
// 0811 - Paucartambo
district.set('081101', { code: '081101', name: 'Paucartambo' });
district.set('081102', { code: '081102', name: 'Caicay' });
district.set('081103', { code: '081103', name: 'Challabamba' });
district.set('081104', { code: '081104', name: 'Colquepata' });
district.set('081105', { code: '081105', name: 'Huancarani' });
district.set('081106', { code: '081106', name: 'Kosñipata' });
// 0812 - Quispicanchi
district.set('081201', { code: '081201', name: 'Urcos' });
district.set('081202', { code: '081202', name: 'Andahuaylillas' });
district.set('081203', { code: '081203', name: 'Camanti' });
district.set('081204', { code: '081204', name: 'Ccarhuayo' });
district.set('081205', { code: '081205', name: 'Ccatca' });
district.set('081206', { code: '081206', name: 'Cusipata' });
district.set('081207', { code: '081207', name: 'Huaro' });
district.set('081208', { code: '081208', name: 'Lucre' });
district.set('081209', { code: '081209', name: 'Marcapata' });
district.set('081210', { code: '081210', name: 'Ocongate' });
district.set('081211', { code: '081211', name: 'Oropesa' });
district.set('081212', { code: '081212', name: 'Quiquijana' });
// 0813 - Urubamba
district.set('081301', { code: '081301', name: 'Urubamba' });
district.set('081302', { code: '081302', name: 'Chinchero' });
district.set('081303', { code: '081303', name: 'Huayllabamba' });
district.set('081304', { code: '081304', name: 'Machupicchu' });
district.set('081305', { code: '081305', name: 'Maras' });
district.set('081306', { code: '081306', name: 'Ollantaytambo' });
district.set('081307', { code: '081307', name: 'Yucay' });
// 09 - Huancavelica
// 0901 - Huancavelica
district.set('090101', { code: '090101', name: 'Huancavelica' });
district.set('090102', { code: '090102', name: 'Acobambilla' });
district.set('090103', { code: '090103', name: 'Acoria' });
district.set('090104', { code: '090104', name: 'Conayca' });
district.set('090105', { code: '090105', name: 'Cuenca' });
district.set('090106', { code: '090106', name: 'Huachocolpa' });
district.set('090107', { code: '090107', name: 'Huayllahuara' });
district.set('090108', { code: '090108', name: 'Izcuchaca' });
district.set('090109', { code: '090109', name: 'Laria' });
district.set('090110', { code: '090110', name: 'Manta' });
district.set('090111', { code: '090111', name: 'Mariscal Cáceres' });
district.set('090112', { code: '090112', name: 'Moya' });
district.set('090113', { code: '090113', name: 'Nuevo Occoro' });
district.set('090114', { code: '090114', name: 'Palca' });
district.set('090115', { code: '090115', name: 'Pilchaca' });
district.set('090116', { code: '090116', name: 'Vilca' });
district.set('090117', { code: '090117', name: 'Yauli' });
district.set('090118', { code: '090118', name: 'Ascensión' });
district.set('090119', { code: '090119', name: 'Huando' });
// 0902 - Acobamba
district.set('090201', { code: '090201', name: 'Acobamba' });
district.set('090202', { code: '090202', name: 'Andabamba' });
district.set('090203', { code: '090203', name: 'Anta' });
district.set('090204', { code: '090204', name: 'Caja' });
district.set('090205', { code: '090205', name: 'Marcas' });
district.set('090206', { code: '090206', name: 'Paucara' });
district.set('090207', { code: '090207', name: 'Pomacocha' });
district.set('090208', { code: '090208', name: 'Rosario' });
// 0903 - Angaraes
district.set('090301', { code: '090301', name: 'Lircay' });
district.set('090302', { code: '090302', name: 'Anchonga' });
district.set('090303', { code: '090303', name: 'Callanmarca' });
district.set('090304', { code: '090304', name: 'Ccochaccasa' });
district.set('090305', { code: '090305', name: 'Chincho' });
district.set('090306', { code: '090306', name: 'Congalla' });
district.set('090307', { code: '090307', name: 'Huanca-Huanca' });
district.set('090308', { code: '090308', name: 'Huayllay Grande' });
district.set('090309', { code: '090309', name: 'Julcamarca' });
district.set('090310', { code: '090310', name: 'San Antonio de Antaparco' });
district.set('090311', { code: '090311', name: 'Santo Tomas de Pata' });
district.set('090312', { code: '090312', name: 'Secclla' });
// 0904 - Castrovirreyna
district.set('090401', { code: '090401', name: 'Castrovirreyna' });
district.set('090402', { code: '090402', name: 'Arma' });
district.set('090403', { code: '090403', name: 'Aurahua' });
district.set('090404', { code: '090404', name: 'Capillas' });
district.set('090405', { code: '090405', name: 'Chupamarca' });
district.set('090406', { code: '090406', name: 'Cocas' });
district.set('090407', { code: '090407', name: 'Huachos' });
district.set('090408', { code: '090408', name: 'Huamatambo' });
district.set('090409', { code: '090409', name: 'Mollepampa' });
district.set('090410', { code: '090410', name: 'San Juan' });
district.set('090411', { code: '090411', name: 'Santa Ana' });
district.set('090412', { code: '090412', name: 'Tantara' });
district.set('090413', { code: '090413', name: 'Ticrapo' });
// 0905 - Churcampa
district.set('090501', { code: '090501', name: 'Churcampa' });
district.set('090502', { code: '090502', name: 'Anco' });
district.set('090503', { code: '090503', name: 'Chinchihuasi' });
district.set('090504', { code: '090504', name: 'El Carmen' });
district.set('090505', { code: '090505', name: 'La Merced' });
district.set('090506', { code: '090506', name: 'Locroja' });
district.set('090507', { code: '090507', name: 'Paucarbamba' });
district.set('090508', { code: '090508', name: 'San Miguel de Mayocc' });
district.set('090509', { code: '090509', name: 'San Pedro de Coris' });
district.set('090510', { code: '090510', name: 'Pachamarca' });
district.set('090511', { code: '090511', name: 'Cosme' });
// 0906 - Huaytará
district.set('090601', { code: '090601', name: 'Huaytara' });
district.set('090602', { code: '090602', name: 'Ayavi' });
district.set('090603', { code: '090603', name: 'Córdova' });
district.set('090604', { code: '090604', name: 'Huayacundo Arma' });
district.set('090605', { code: '090605', name: 'Laramarca' });
district.set('090606', { code: '090606', name: 'Ocoyo' });
district.set('090607', { code: '090607', name: 'Pilpichaca' });
district.set('090608', { code: '090608', name: 'Querco' });
district.set('090609', { code: '090609', name: 'Quito-Arma' });
district.set('090610', { code: '090610', name: 'San Antonio de Cusicancha' });
district.set('090611', { code: '090611', name: 'San Francisco de Sangayaico' });
district.set('090612', { code: '090612', name: 'San Isidro' });
district.set('090613', { code: '090613', name: 'Santiago de Chocorvos' });
district.set('090614', { code: '090614', name: 'Santiago de Quirahuara' });
district.set('090615', { code: '090615', name: 'Santo Domingo de Capillas' });
district.set('090616', { code: '090616', name: 'Tambo' });
// 0907 - Tayacaja
district.set('090701', { code: '090701', name: 'Pampas' });
district.set('090702', { code: '090702', name: 'Acostambo' });
district.set('090703', { code: '090703', name: 'Acraquia' });
district.set('090704', { code: '090704', name: 'Ahuaycha' });
district.set('090705', { code: '090705', name: 'Colcabamba' });
district.set('090706', { code: '090706', name: 'Daniel Hernández' });
district.set('090707', { code: '090707', name: 'Huachocolpa' });
district.set('090709', { code: '090709', name: 'Huaribamba' });
district.set('090710', { code: '090710', name: 'Ñahuimpuquio' });
district.set('090711', { code: '090711', name: 'Pazos' });
district.set('090713', { code: '090713', name: 'Quishuar' });
district.set('090714', { code: '090714', name: 'Salcabamba' });
district.set('090715', { code: '090715', name: 'Salcahuasi' });
district.set('090716', { code: '090716', name: 'San Marcos de Rocchac' });
district.set('090717', { code: '090717', name: 'Surcubamba' });
district.set('090718', { code: '090718', name: 'Tintay Puncu' });
district.set('090719', { code: '090719', name: 'Quichuas' });
district.set('090720', { code: '090720', name: 'Andaymarca' });
district.set('090721', { code: '090721', name: 'Roble' });
district.set('090722', { code: '090722', name: 'Pichos' });
// 10 - Huánuco
// 1001 - Huánuco
district.set('100101', { code: '100101', name: 'Huanuco' });
district.set('100102', { code: '100102', name: 'Amarilis' });
district.set('100103', { code: '100103', name: 'Chinchao' });
district.set('100104', { code: '100104', name: 'Churubamba' });
district.set('100105', { code: '100105', name: 'Margos' });
district.set('100106', { code: '100106', name: 'Quisqui (Kichki)' });
district.set('100107', { code: '100107', name: 'San Francisco de Cayran' });
district.set('100108', { code: '100108', name: 'San Pedro de Chaulan' });
district.set('100109', { code: '100109', name: 'Santa María del Valle' });
district.set('100110', { code: '100110', name: 'Yarumayo' });
district.set('100111', { code: '100111', name: 'Pillco Marca' });
district.set('100112', { code: '100112', name: 'Yacus' });
district.set('100113', { code: '100113', name: 'San Pablo de Pillao' });
// 1002 - Ambo
district.set('100201', { code: '100201', name: 'Ambo' });
district.set('100202', { code: '100202', name: 'Cayna' });
district.set('100203', { code: '100203', name: 'Colpas' });
district.set('100204', { code: '100204', name: 'Conchamarca' });
district.set('100205', { code: '100205', name: 'Huacar' });
district.set('100206', { code: '100206', name: 'San Francisco' });
district.set('100207', { code: '100207', name: 'San Rafael' });
district.set('100208', { code: '100208', name: 'Tomay Kichwa' });
// 1003 - Dos de Mayo
district.set('100301', { code: '100301', name: 'La Unión' });
district.set('100307', { code: '100307', name: 'Chuquis' });
district.set('100311', { code: '100311', name: 'Marías' });
district.set('100313', { code: '100313', name: 'Pachas' });
district.set('100316', { code: '100316', name: 'Quivilla' });
district.set('100317', { code: '100317', name: 'Ripan' });
district.set('100321', { code: '100321', name: 'Shunqui' });
district.set('100322', { code: '100322', name: 'Sillapata' });
district.set('100323', { code: '100323', name: 'Yanas' });
// 1004 - Huacaybamba
district.set('100401', { code: '100401', name: 'Huacaybamba' });
district.set('100402', { code: '100402', name: 'Canchabamba' });
district.set('100403', { code: '100403', name: 'Cochabamba' });
district.set('100404', { code: '100404', name: 'Pinra' });
// 1005 - Huamalíes
district.set('100501', { code: '100501', name: 'Llata' });
district.set('100502', { code: '100502', name: 'Arancay' });
district.set('100503', { code: '100503', name: 'Chavín de Pariarca' });
district.set('100504', { code: '100504', name: 'Jacas Grande' });
district.set('100505', { code: '100505', name: 'Jircan' });
district.set('100506', { code: '100506', name: 'Miraflores' });
district.set('100507', { code: '100507', name: 'Monzón' });
district.set('100508', { code: '100508', name: 'Punchao' });
district.set('100509', { code: '100509', name: 'Puños' });
district.set('100510', { code: '100510', name: 'Singa' });
district.set('100511', { code: '100511', name: 'Tantamayo' });
// 1006 - Leoncio Prado
district.set('100601', { code: '100601', name: 'Rupa-Rupa' });
district.set('100602', { code: '100602', name: 'Daniel Alomía Robles' });
district.set('100603', { code: '100603', name: 'Hermílio Valdizan' });
district.set('100604', { code: '100604', name: 'José Crespo y Castillo' });
district.set('100605', { code: '100605', name: 'Luyando' });
district.set('100606', { code: '100606', name: 'Mariano Damaso Beraun' });
district.set('100607', { code: '100607', name: 'Pucayacu' });
district.set('100608', { code: '100608', name: 'Castillo Grande' });
// 1007 - Marañón
district.set('100701', { code: '100701', name: 'Huacrachuco' });
district.set('100702', { code: '100702', name: 'Cholon' });
district.set('100703', { code: '100703', name: 'San Buenaventura' });
district.set('100704', { code: '100704', name: 'La Morada' });
district.set('100705', {
  code: '100705',
  name: 'Santa Rosa de Alto Yanajanca',
});
// 1008 - Pachitea
district.set('100801', { code: '100801', name: 'Panao' });
district.set('100802', { code: '100802', name: 'Chaglla' });
district.set('100803', { code: '100803', name: 'Molino' });
district.set('100804', { code: '100804', name: 'Umari' });
// 1009 - Puerto Inca
district.set('100901', { code: '100901', name: 'Puerto Inca' });
district.set('100902', { code: '100902', name: 'Codo del Pozuzo' });
district.set('100903', { code: '100903', name: 'Honoria' });
district.set('100904', { code: '100904', name: 'Tournavista' });
district.set('100905', { code: '100905', name: 'Yuyapichis' });
// 1010 - Lauricocha
district.set('101001', { code: '101001', name: 'Jesús' });
district.set('101002', { code: '101002', name: 'Baños' });
district.set('101003', { code: '101003', name: 'Jivia' });
district.set('101004', { code: '101004', name: 'Queropalca' });
district.set('101005', { code: '101005', name: 'Rondos' });
district.set('101006', { code: '101006', name: 'San Francisco de Asís' });
district.set('101007', { code: '101007', name: 'San Miguel de Cauri' });
// 1011 - Yarowilca
district.set('101101', { code: '101101', name: 'Chavinillo' });
district.set('101102', { code: '101102', name: 'Cahuac' });
district.set('101103', { code: '101103', name: 'Chacabamba' });
district.set('101104', { code: '101104', name: 'Aparicio Pomares' });
district.set('101105', { code: '101105', name: 'Jacas Chico' });
district.set('101106', { code: '101106', name: 'Obas' });
district.set('101107', { code: '101107', name: 'Pampamarca' });
district.set('101108', { code: '101108', name: 'Choras' });
// 11 - Ica
// 1101 - Ica
district.set('110101', { code: '110101', name: 'Ica' });
district.set('110102', { code: '110102', name: 'La Tinguiña' });
district.set('110103', { code: '110103', name: 'Los Aquijes' });
district.set('110104', { code: '110104', name: 'Ocucaje' });
district.set('110105', { code: '110105', name: 'Pachacutec' });
district.set('110106', { code: '110106', name: 'Parcona' });
district.set('110107', { code: '110107', name: 'Pueblo Nuevo' });
district.set('110108', { code: '110108', name: 'Salas' });
district.set('110109', { code: '110109', name: 'San José de Los Molinos' });
district.set('110110', { code: '110110', name: 'San Juan Bautista' });
district.set('110111', { code: '110111', name: 'Santiago' });
district.set('110112', { code: '110112', name: 'Subtanjalla' });
district.set('110113', { code: '110113', name: 'Tate' });
district.set('110114', { code: '110114', name: 'Yauca del Rosario' });
// 1102 - Chincha
district.set('110201', { code: '110201', name: 'Chincha Alta' });
district.set('110202', { code: '110202', name: 'Alto Laran' });
district.set('110203', { code: '110203', name: 'Chavin' });
district.set('110204', { code: '110204', name: 'Chincha Baja' });
district.set('110205', { code: '110205', name: 'El Carmen' });
district.set('110206', { code: '110206', name: 'Grocio Prado' });
district.set('110207', { code: '110207', name: 'Pueblo Nuevo' });
district.set('110208', { code: '110208', name: 'San Juan de Yanac' });
district.set('110209', { code: '110209', name: 'San Pedro de Huacarpana' });
district.set('110210', { code: '110210', name: 'Sunampe' });
district.set('110211', { code: '110211', name: 'Tambo de Mora' });
// 1103 - Nasca
district.set('110301', { code: '110301', name: 'Nasca' });
district.set('110302', { code: '110302', name: 'Changuillo' });
district.set('110303', { code: '110303', name: 'El Ingenio' });
district.set('110304', { code: '110304', name: 'Marcona' });
district.set('110305', { code: '110305', name: 'Vista Alegre' });
// 1104 - Palpa
district.set('110401', { code: '110401', name: 'Palpa' });
district.set('110402', { code: '110402', name: 'Llipata' });
district.set('110403', { code: '110403', name: 'Río Grande' });
district.set('110404', { code: '110404', name: 'Santa Cruz' });
district.set('110405', { code: '110405', name: 'Tibillo' });
// 1105 - Pisco
district.set('110501', { code: '110501', name: 'Pisco' });
district.set('110502', { code: '110502', name: 'Huancano' });
district.set('110503', { code: '110503', name: 'Humay' });
district.set('110504', { code: '110504', name: 'Independencia' });
district.set('110505', { code: '110505', name: 'Paracas' });
district.set('110506', { code: '110506', name: 'San Andrés' });
district.set('110507', { code: '110507', name: 'San Clemente' });
district.set('110508', { code: '110508', name: 'Tupac Amaru Inca' });
// 12 - Junín
// 1201 - Huancayo
district.set('120101', { code: '120101', name: 'Huancayo' });
district.set('120104', { code: '120104', name: 'Carhuacallanga' });
district.set('120105', { code: '120105', name: 'Chacapampa' });
district.set('120106', { code: '120106', name: 'Chicche' });
district.set('120107', { code: '120107', name: 'Chilca' });
district.set('120108', { code: '120108', name: 'Chongos Alto' });
district.set('120111', { code: '120111', name: 'Chupuro' });
district.set('120112', { code: '120112', name: 'Colca' });
district.set('120113', { code: '120113', name: 'Cullhuas' });
district.set('120114', { code: '120114', name: 'El Tambo' });
district.set('120116', { code: '120116', name: 'Huacrapuquio' });
district.set('120117', { code: '120117', name: 'Hualhuas' });
district.set('120119', { code: '120119', name: 'Huancan' });
district.set('120120', { code: '120120', name: 'Huasicancha' });
district.set('120121', { code: '120121', name: 'Huayucachi' });
district.set('120122', { code: '120122', name: 'Ingenio' });
district.set('120124', { code: '120124', name: 'Pariahuanca' });
district.set('120125', { code: '120125', name: 'Pilcomayo' });
district.set('120126', { code: '120126', name: 'Pucara' });
district.set('120127', { code: '120127', name: 'Quichuay' });
district.set('120128', { code: '120128', name: 'Quilcas' });
district.set('120129', { code: '120129', name: 'San Agustín' });
district.set('120130', { code: '120130', name: 'San Jerónimo de Tunan' });
district.set('120132', { code: '120132', name: 'Saño' });
district.set('120133', { code: '120133', name: 'Sapallanga' });
district.set('120134', { code: '120134', name: 'Sicaya' });
district.set('120135', { code: '120135', name: 'Santo Domingo de Acobamba' });
district.set('120136', { code: '120136', name: 'Viques' });
// 1202 - Concepción
district.set('120201', { code: '120201', name: 'Concepción' });
district.set('120202', { code: '120202', name: 'Aco' });
district.set('120203', { code: '120203', name: 'Andamarca' });
district.set('120204', { code: '120204', name: 'Chambara' });
district.set('120205', { code: '120205', name: 'Cochas' });
district.set('120206', { code: '120206', name: 'Comas' });
district.set('120207', { code: '120207', name: 'Heroínas Toledo' });
district.set('120208', { code: '120208', name: 'Manzanares' });
district.set('120209', { code: '120209', name: 'Mariscal Castilla' });
district.set('120210', { code: '120210', name: 'Matahuasi' });
district.set('120211', { code: '120211', name: 'Mito' });
district.set('120212', { code: '120212', name: 'Nueve de Julio' });
district.set('120213', { code: '120213', name: 'Orcotuna' });
district.set('120214', { code: '120214', name: 'San José de Quero' });
district.set('120215', { code: '120215', name: 'Santa Rosa de Ocopa' });
// 1203 - Chanchamayo
district.set('120301', { code: '120301', name: 'Chanchamayo' });
district.set('120302', { code: '120302', name: 'Perene' });
district.set('120303', { code: '120303', name: 'Pichanaqui' });
district.set('120304', { code: '120304', name: 'San Luis de Shuaro' });
district.set('120305', { code: '120305', name: 'San Ramón' });
district.set('120306', { code: '120306', name: 'Vitoc' });
// 1204 - Jauja
district.set('120401', { code: '120401', name: 'Jauja' });
district.set('120402', { code: '120402', name: 'Acolla' });
district.set('120403', { code: '120403', name: 'Apata' });
district.set('120404', { code: '120404', name: 'Ataura' });
district.set('120405', { code: '120405', name: 'Canchayllo' });
district.set('120406', { code: '120406', name: 'Curicaca' });
district.set('120407', { code: '120407', name: 'El Mantaro' });
district.set('120408', { code: '120408', name: 'Huamali' });
district.set('120409', { code: '120409', name: 'Huaripampa' });
district.set('120410', { code: '120410', name: 'Huertas' });
district.set('120411', { code: '120411', name: 'Janjaillo' });
district.set('120412', { code: '120412', name: 'Julcán' });
district.set('120413', { code: '120413', name: 'Leonor Ordóñez' });
district.set('120414', { code: '120414', name: 'Llocllapampa' });
district.set('120415', { code: '120415', name: 'Marco' });
district.set('120416', { code: '120416', name: 'Masma' });
district.set('120417', { code: '120417', name: 'Masma Chicche' });
district.set('120418', { code: '120418', name: 'Molinos' });
district.set('120419', { code: '120419', name: 'Monobamba' });
district.set('120420', { code: '120420', name: 'Muqui' });
district.set('120421', { code: '120421', name: 'Muquiyauyo' });
district.set('120422', { code: '120422', name: 'Paca' });
district.set('120423', { code: '120423', name: 'Paccha' });
district.set('120424', { code: '120424', name: 'Pancan' });
district.set('120425', { code: '120425', name: 'Parco' });
district.set('120426', { code: '120426', name: 'Pomacancha' });
district.set('120427', { code: '120427', name: 'Ricran' });
district.set('120428', { code: '120428', name: 'San Lorenzo' });
district.set('120429', { code: '120429', name: 'San Pedro de Chunan' });
district.set('120430', { code: '120430', name: 'Sausa' });
district.set('120431', { code: '120431', name: 'Sincos' });
district.set('120432', { code: '120432', name: 'Tunan Marca' });
district.set('120433', { code: '120433', name: 'Yauli' });
district.set('120434', { code: '120434', name: 'Yauyos' });
// 1205 - Junín
district.set('120501', { code: '120501', name: 'Junin' });
district.set('120502', { code: '120502', name: 'Carhuamayo' });
district.set('120503', { code: '120503', name: 'Ondores' });
district.set('120504', { code: '120504', name: 'Ulcumayo' });
// 1206 - Satipo
district.set('120601', { code: '120601', name: 'Satipo' });
district.set('120602', { code: '120602', name: 'Coviriali' });
district.set('120603', { code: '120603', name: 'Llaylla' });
district.set('120604', { code: '120604', name: 'Mazamari' });
district.set('120605', { code: '120605', name: 'Pampa Hermosa' });
district.set('120606', { code: '120606', name: 'Pangoa' });
district.set('120607', { code: '120607', name: 'Río Negro' });
district.set('120608', { code: '120608', name: 'Río Tambo' });
district.set('120609', { code: '120609', name: 'Vizcatan del Ene' });
// 1207 - Tarma
district.set('120701', { code: '120701', name: 'Tarma' });
district.set('120702', { code: '120702', name: 'Acobamba' });
district.set('120703', { code: '120703', name: 'Huaricolca' });
district.set('120704', { code: '120704', name: 'Huasahuasi' });
district.set('120705', { code: '120705', name: 'La Unión' });
district.set('120706', { code: '120706', name: 'Palca' });
district.set('120707', { code: '120707', name: 'Palcamayo' });
district.set('120708', { code: '120708', name: 'San Pedro de Cajas' });
district.set('120709', { code: '120709', name: 'Tapo' });
// 1208 - Yauli
district.set('120801', { code: '120801', name: 'La Oroya' });
district.set('120802', { code: '120802', name: 'Chacapalpa' });
district.set('120803', { code: '120803', name: 'Huay-Huay' });
district.set('120804', { code: '120804', name: 'Marcapomacocha' });
district.set('120805', { code: '120805', name: 'Morococha' });
district.set('120806', { code: '120806', name: 'Paccha' });
district.set('120807', {
  code: '120807',
  name: 'Santa Bárbara de Carhuacayan',
});
district.set('120808', { code: '120808', name: 'Santa Rosa de Sacco' });
district.set('120809', { code: '120809', name: 'Suitucancha' });
district.set('120810', { code: '120810', name: 'Yauli' });
// 1209 - Chupaca
district.set('120901', { code: '120901', name: 'Chupaca' });
district.set('120902', { code: '120902', name: 'Ahuac' });
district.set('120903', { code: '120903', name: 'Chongos Bajo' });
district.set('120904', { code: '120904', name: 'Huachac' });
district.set('120905', { code: '120905', name: 'Huamancaca Chico' });
district.set('120906', { code: '120906', name: 'San Juan de Iscos' });
district.set('120907', { code: '120907', name: 'San Juan de Jarpa' });
district.set('120908', { code: '120908', name: 'Tres de Diciembre' });
district.set('120909', { code: '120909', name: 'Yanacancha' });
// 13 - La Libertad
// 1301 - Trujillo
district.set('130101', { code: '130101', name: 'Trujillo' });
district.set('130102', { code: '130102', name: 'El Porvenir' });
district.set('130103', { code: '130103', name: 'Florencia de Mora' });
district.set('130104', { code: '130104', name: 'Huanchaco' });
district.set('130105', { code: '130105', name: 'La Esperanza' });
district.set('130106', { code: '130106', name: 'Laredo' });
district.set('130107', { code: '130107', name: 'Moche' });
district.set('130108', { code: '130108', name: 'Poroto' });
district.set('130109', { code: '130109', name: 'Salaverry' });
district.set('130110', { code: '130110', name: 'Simbal' });
district.set('130111', { code: '130111', name: 'Victor Larco Herrera' });
// 1302 - Ascope
district.set('130201', { code: '130201', name: 'Ascope' });
district.set('130202', { code: '130202', name: 'Chicama' });
district.set('130203', { code: '130203', name: 'Chocope' });
district.set('130204', { code: '130204', name: 'Magdalena de Cao' });
district.set('130205', { code: '130205', name: 'Paijan' });
district.set('130206', { code: '130206', name: 'Rázuri' });
district.set('130207', { code: '130207', name: 'Santiago de Cao' });
district.set('130208', { code: '130208', name: 'Casa Grande' });
// 1303 - Bolívar
district.set('130301', { code: '130301', name: 'Bolívar' });
district.set('130302', { code: '130302', name: 'Bambamarca' });
district.set('130303', { code: '130303', name: 'Condormarca' });
district.set('130304', { code: '130304', name: 'Longotea' });
district.set('130305', { code: '130305', name: 'Uchumarca' });
district.set('130306', { code: '130306', name: 'Ucuncha' });
// 1304 - Chepén
district.set('130401', { code: '130401', name: 'Chepen' });
district.set('130402', { code: '130402', name: 'Pacanga' });
district.set('130403', { code: '130403', name: 'Pueblo Nuevo' });
// 1305 - Julcán
district.set('130501', { code: '130501', name: 'Julcan' });
district.set('130502', { code: '130502', name: 'Calamarca' });
district.set('130503', { code: '130503', name: 'Carabamba' });
district.set('130504', { code: '130504', name: 'Huaso' });
// 1306 - Otuzco
district.set('130601', { code: '130601', name: 'Otuzco' });
district.set('130602', { code: '130602', name: 'Agallpampa' });
district.set('130604', { code: '130604', name: 'Charat' });
district.set('130605', { code: '130605', name: 'Huaranchal' });
district.set('130606', { code: '130606', name: 'La Cuesta' });
district.set('130608', { code: '130608', name: 'Mache' });
district.set('130610', { code: '130610', name: 'Paranday' });
district.set('130611', { code: '130611', name: 'Salpo' });
district.set('130613', { code: '130613', name: 'Sinsicap' });
district.set('130614', { code: '130614', name: 'Usquil' });
// 1307 - Pacasmayo
district.set('130701', { code: '130701', name: 'San Pedro de Lloc' });
district.set('130702', { code: '130702', name: 'Guadalupe' });
district.set('130703', { code: '130703', name: 'Jequetepeque' });
district.set('130704', { code: '130704', name: 'Pacasmayo' });
district.set('130705', { code: '130705', name: 'San José' });
// 1308 - Pataz
district.set('130801', { code: '130801', name: 'Tayabamba' });
district.set('130802', { code: '130802', name: 'Buldibuyo' });
district.set('130803', { code: '130803', name: 'Chillia' });
district.set('130804', { code: '130804', name: 'Huancaspata' });
district.set('130805', { code: '130805', name: 'Huaylillas' });
district.set('130806', { code: '130806', name: 'Huayo' });
district.set('130807', { code: '130807', name: 'Ongon' });
district.set('130808', { code: '130808', name: 'Parcoy' });
district.set('130809', { code: '130809', name: 'Pataz' });
district.set('130810', { code: '130810', name: 'Pias' });
district.set('130811', { code: '130811', name: 'Santiago de Challas' });
district.set('130812', { code: '130812', name: 'Taurija' });
district.set('130813', { code: '130813', name: 'Urpay' });
// 1309 - Sánchez Carr{code: chez Car, name:ión
district.set('130901', { code: '130901', name: 'Huamachuco' });
district.set('130902', { code: '130902', name: 'Chugay' });
district.set('130903', { code: '130903', name: 'Cochorco' });
district.set('130904', { code: '130904', name: 'Curgos' });
district.set('130905', { code: '130905', name: 'Marcabal' });
district.set('130906', { code: '130906', name: 'Sanagoran' });
district.set('130907', { code: '130907', name: 'Sarin' });
district.set('130908', { code: '130908', name: 'Sartimbamba' });
// 1310 - Santiago de {code: tiago de, name:Chuco
district.set('131001', { code: '131001', name: 'Santiago de Chuco' });
district.set('131002', { code: '131002', name: 'Angasmarca' });
district.set('131003', { code: '131003', name: 'Cachicadan' });
district.set('131004', { code: '131004', name: 'Mollebamba' });
district.set('131005', { code: '131005', name: 'Mollepata' });
district.set('131006', { code: '131006', name: 'Quiruvilca' });
district.set('131007', { code: '131007', name: 'Santa Cruz de Chuca' });
district.set('131008', { code: '131008', name: 'Sitabamba' });
// 1311 - Gran Chimú
district.set('131101', { code: '131101', name: 'Cascas' });
district.set('131102', { code: '131102', name: 'Lucma' });
district.set('131103', { code: '131103', name: 'Marmot' });
district.set('131104', { code: '131104', name: 'Sayapullo' });
// 1312 - Virú
district.set('131201', { code: '131201', name: 'Viru' });
district.set('131202', { code: '131202', name: 'Chao' });
district.set('131203', { code: '131203', name: 'Guadalupito' });
// 14 - Lambayeque
// 1401 - Chiclayo
district.set('140101', { code: '140101', name: 'Chiclayo' });
district.set('140102', { code: '140102', name: 'Chongoyape' });
district.set('140103', { code: '140103', name: 'Eten' });
district.set('140104', { code: '140104', name: 'Eten Puerto' });
district.set('140105', { code: '140105', name: 'José Leonardo Ortiz' });
district.set('140106', { code: '140106', name: 'La Victoria' });
district.set('140107', { code: '140107', name: 'Lagunas' });
district.set('140108', { code: '140108', name: 'Monsefu' });
district.set('140109', { code: '140109', name: 'Nueva Arica' });
district.set('140110', { code: '140110', name: 'Oyotun' });
district.set('140111', { code: '140111', name: 'Picsi' });
district.set('140112', { code: '140112', name: 'Pimentel' });
district.set('140113', { code: '140113', name: 'Reque' });
district.set('140114', { code: '140114', name: 'Santa Rosa' });
district.set('140115', { code: '140115', name: 'Saña' });
district.set('140116', { code: '140116', name: 'Cayalti' });
district.set('140117', { code: '140117', name: 'Patapo' });
district.set('140118', { code: '140118', name: 'Pomalca' });
district.set('140119', { code: '140119', name: 'Pucala' });
district.set('140120', { code: '140120', name: 'Tuman' });
// 1402 - Ferreñafe
district.set('140201', { code: '140201', name: 'Ferreñafe' });
district.set('140202', { code: '140202', name: 'Cañaris' });
district.set('140203', { code: '140203', name: 'Incahuasi' });
district.set('140204', { code: '140204', name: 'Manuel Antonio Mesones Muro' });
district.set('140205', { code: '140205', name: 'Pitipo' });
district.set('140206', { code: '140206', name: 'Pueblo Nuevo' });
// 1403 - Lambayeque
district.set('140301', { code: '140301', name: 'Lambayeque' });
district.set('140302', { code: '140302', name: 'Chochope' });
district.set('140303', { code: '140303', name: 'Illimo' });
district.set('140304', { code: '140304', name: 'Jayanca' });
district.set('140305', { code: '140305', name: 'Mochumi' });
district.set('140306', { code: '140306', name: 'Morrope' });
district.set('140307', { code: '140307', name: 'Motupe' });
district.set('140308', { code: '140308', name: 'Olmos' });
district.set('140309', { code: '140309', name: 'Pacora' });
district.set('140310', { code: '140310', name: 'Salas' });
district.set('140311', { code: '140311', name: 'San José' });
district.set('140312', { code: '140312', name: 'Tucume' });
// 15 - Lima
// 1501 - Lima
district.set('150101', { code: '150101', name: 'Lima' });
district.set('150102', { code: '150102', name: 'Ancón' });
district.set('150103', { code: '150103', name: 'Ate' });
district.set('150104', { code: '150104', name: 'Barranco' });
district.set('150105', { code: '150105', name: 'Breña' });
district.set('150106', { code: '150106', name: 'Carabayllo' });
district.set('150107', { code: '150107', name: 'Chaclacayo' });
district.set('150108', { code: '150108', name: 'Chorrillos' });
district.set('150109', { code: '150109', name: 'Cieneguilla' });
district.set('150110', { code: '150110', name: 'Comas' });
district.set('150111', { code: '150111', name: 'El Agustino' });
district.set('150112', { code: '150112', name: 'Independencia' });
district.set('150113', { code: '150113', name: 'Jesús María' });
district.set('150114', { code: '150114', name: 'La Molina' });
district.set('150115', { code: '150115', name: 'La Victoria' });
district.set('150116', { code: '150116', name: 'Lince' });
district.set('150117', { code: '150117', name: 'Los Olivos' });
district.set('150118', { code: '150118', name: 'Lurigancho' });
district.set('150119', { code: '150119', name: 'Lurin' });
district.set('150120', { code: '150120', name: 'Magdalena del Mar' });
district.set('150121', { code: '150121', name: 'Pueblo Libre' });
district.set('150122', { code: '150122', name: 'Miraflores' });
district.set('150123', { code: '150123', name: 'Pachacamac' });
district.set('150124', { code: '150124', name: 'Pucusana' });
district.set('150125', { code: '150125', name: 'Puente Piedra' });
district.set('150126', { code: '150126', name: 'Punta Hermosa' });
district.set('150127', { code: '150127', name: 'Punta Negra' });
district.set('150128', { code: '150128', name: 'Rímac' });
district.set('150129', { code: '150129', name: 'San Bartolo' });
district.set('150130', { code: '150130', name: 'San Borja' });
district.set('150131', { code: '150131', name: 'San Isidro' });
district.set('150132', { code: '150132', name: 'San Juan de Lurigancho' });
district.set('150133', { code: '150133', name: 'San Juan de Miraflores' });
district.set('150134', { code: '150134', name: 'San Luis' });
district.set('150135', { code: '150135', name: 'San Martín de Porres' });
district.set('150136', { code: '150136', name: 'San Miguel' });
district.set('150137', { code: '150137', name: 'Santa Anita' });
district.set('150138', { code: '150138', name: 'Santa María del Mar' });
district.set('150139', { code: '150139', name: 'Santa Rosa' });
district.set('150140', { code: '150140', name: 'Santiago de Surco' });
district.set('150141', { code: '150141', name: 'Surquillo' });
district.set('150142', { code: '150142', name: 'Villa El Salvador' });
district.set('150143', { code: '150143', name: 'Villa María del Triunfo' });
// 1502 - Barranca
district.set('150201', { code: '150201', name: 'Barranca' });
district.set('150202', { code: '150202', name: 'Paramonga' });
district.set('150203', { code: '150203', name: 'Pativilca' });
district.set('150204', { code: '150204', name: 'Supe' });
district.set('150205', { code: '150205', name: 'Supe Puerto' });
// 1503 - Cajatambo
district.set('150301', { code: '150301', name: 'Cajatambo' });
district.set('150302', { code: '150302', name: 'Copa' });
district.set('150303', { code: '150303', name: 'Gorgor' });
district.set('150304', { code: '150304', name: 'Huancapon' });
district.set('150305', { code: '150305', name: 'Manas' });
// 1504 - Canta
district.set('150401', { code: '150401', name: 'Canta' });
district.set('150402', { code: '150402', name: 'Arahuay' });
district.set('150403', { code: '150403', name: 'Huamantanga' });
district.set('150404', { code: '150404', name: 'Huaros' });
district.set('150405', { code: '150405', name: 'Lachaqui' });
district.set('150406', { code: '150406', name: 'San Buenaventura' });
district.set('150407', { code: '150407', name: 'Santa Rosa de Quives' });
// 1505 - Cañete
district.set('150501', { code: '150501', name: 'San Vicente de Cañete' });
district.set('150502', { code: '150502', name: 'Asia' });
district.set('150503', { code: '150503', name: 'Calango' });
district.set('150504', { code: '150504', name: 'Cerro Azul' });
district.set('150505', { code: '150505', name: 'Chilca' });
district.set('150506', { code: '150506', name: 'Coayllo' });
district.set('150507', { code: '150507', name: 'Imperial' });
district.set('150508', { code: '150508', name: 'Lunahuana' });
district.set('150509', { code: '150509', name: 'Mala' });
district.set('150510', { code: '150510', name: 'Nuevo Imperial' });
district.set('150511', { code: '150511', name: 'Pacaran' });
district.set('150512', { code: '150512', name: 'Quilmana' });
district.set('150513', { code: '150513', name: 'San Antonio' });
district.set('150514', { code: '150514', name: 'San Luis' });
district.set('150515', { code: '150515', name: 'Santa Cruz de Flores' });
district.set('150516', { code: '150516', name: 'Zúñiga' });
// 1506 - Huaral
district.set('150601', { code: '150601', name: 'Huaral' });
district.set('150602', { code: '150602', name: 'Atavillos Alto' });
district.set('150603', { code: '150603', name: 'Atavillos Bajo' });
district.set('150604', { code: '150604', name: 'Aucallama' });
district.set('150605', { code: '150605', name: 'Chancay' });
district.set('150606', { code: '150606', name: 'Ihuari' });
district.set('150607', { code: '150607', name: 'Lampian' });
district.set('150608', { code: '150608', name: 'Pacaraos' });
district.set('150609', { code: '150609', name: 'San Miguel de Acos' });
district.set('150610', { code: '150610', name: 'Santa Cruz de Andamarca' });
district.set('150611', { code: '150611', name: 'Sumbilca' });
district.set('150612', { code: '150612', name: 'Veintisiete de Noviembre' });
// 1507 - Huarochirí
district.set('150701', { code: '150701', name: 'Matucana' });
district.set('150702', { code: '150702', name: 'Antioquia' });
district.set('150703', { code: '150703', name: 'Callahuanca' });
district.set('150704', { code: '150704', name: 'Carampoma' });
district.set('150705', { code: '150705', name: 'Chicla' });
district.set('150706', { code: '150706', name: 'Cuenca' });
district.set('150707', { code: '150707', name: 'Huachupampa' });
district.set('150708', { code: '150708', name: 'Huanza' });
district.set('150709', { code: '150709', name: 'Huarochiri' });
district.set('150710', { code: '150710', name: 'Lahuaytambo' });
district.set('150711', { code: '150711', name: 'Langa' });
district.set('150712', { code: '150712', name: 'Laraos' });
district.set('150713', { code: '150713', name: 'Mariatana' });
district.set('150714', { code: '150714', name: 'Ricardo Palma' });
district.set('150715', { code: '150715', name: 'San Andrés de Tupicocha' });
district.set('150716', { code: '150716', name: 'San Antonio' });
district.set('150717', { code: '150717', name: 'San Bartolomé' });
district.set('150718', { code: '150718', name: 'San Damian' });
district.set('150719', { code: '150719', name: 'San Juan de Iris' });
district.set('150720', { code: '150720', name: 'San Juan de Tantaranche' });
district.set('150721', { code: '150721', name: 'San Lorenzo de Quinti' });
district.set('150722', { code: '150722', name: 'San Mateo' });
district.set('150723', { code: '150723', name: 'San Mateo de Otao' });
district.set('150724', { code: '150724', name: 'San Pedro de Casta' });
district.set('150725', { code: '150725', name: 'San Pedro de Huancayre' });
district.set('150726', { code: '150726', name: 'Sangallaya' });
district.set('150727', { code: '150727', name: 'Santa Cruz de Cocachacra' });
district.set('150728', { code: '150728', name: 'Santa Eulalia' });
district.set('150729', { code: '150729', name: 'Santiago de Anchucaya' });
district.set('150730', { code: '150730', name: 'Santiago de Tuna' });
district.set('150731', {
  code: '150731',
  name: 'Santo Domingo de Los Olleros',
});
district.set('150732', { code: '150732', name: 'Surco' });
// 1508 - Huaura
district.set('150801', { code: '150801', name: 'Huacho' });
district.set('150802', { code: '150802', name: 'Ambar' });
district.set('150803', { code: '150803', name: 'Caleta de Carquin' });
district.set('150804', { code: '150804', name: 'Checras' });
district.set('150805', { code: '150805', name: 'Hualmay' });
district.set('150806', { code: '150806', name: 'Huaura' });
district.set('150807', { code: '150807', name: 'Leoncio Prado' });
district.set('150808', { code: '150808', name: 'Paccho' });
district.set('150809', { code: '150809', name: 'Santa Leonor' });
district.set('150810', { code: '150810', name: 'Santa María' });
district.set('150811', { code: '150811', name: 'Sayan' });
district.set('150812', { code: '150812', name: 'Vegueta' });
// 1509 - Oyón
district.set('150901', { code: '150901', name: 'Oyon' });
district.set('150902', { code: '150902', name: 'Andajes' });
district.set('150903', { code: '150903', name: 'Caujul' });
district.set('150904', { code: '150904', name: 'Cochamarca' });
district.set('150905', { code: '150905', name: 'Navan' });
district.set('150906', { code: '150906', name: 'Pachangara' });
// 1510 - Yauyos
district.set('151001', { code: '151001', name: 'Yauyos' });
district.set('151002', { code: '151002', name: 'Alis' });
district.set('151003', { code: '151003', name: 'Allauca' });
district.set('151004', { code: '151004', name: 'Ayaviri' });
district.set('151005', { code: '151005', name: 'Azángaro' });
district.set('151006', { code: '151006', name: 'Cacra' });
district.set('151007', { code: '151007', name: 'Carania' });
district.set('151008', { code: '151008', name: 'Catahuasi' });
district.set('151009', { code: '151009', name: 'Chocos' });
district.set('151010', { code: '151010', name: 'Cochas' });
district.set('151011', { code: '151011', name: 'Colonia' });
district.set('151012', { code: '151012', name: 'Hongos' });
district.set('151013', { code: '151013', name: 'Huampara' });
district.set('151014', { code: '151014', name: 'Huancaya' });
district.set('151015', { code: '151015', name: 'Huangascar' });
district.set('151016', { code: '151016', name: 'Huantan' });
district.set('151017', { code: '151017', name: 'Huañec' });
district.set('151018', { code: '151018', name: 'Laraos' });
district.set('151019', { code: '151019', name: 'Lincha' });
district.set('151020', { code: '151020', name: 'Madean' });
district.set('151021', { code: '151021', name: 'Miraflores' });
district.set('151022', { code: '151022', name: 'Omas' });
district.set('151023', { code: '151023', name: 'Putinza' });
district.set('151024', { code: '151024', name: 'Quinches' });
district.set('151025', { code: '151025', name: 'Quinocay' });
district.set('151026', { code: '151026', name: 'San Joaquín' });
district.set('151027', { code: '151027', name: 'San Pedro de Pilas' });
district.set('151028', { code: '151028', name: 'Tanta' });
district.set('151029', { code: '151029', name: 'Tauripampa' });
district.set('151030', { code: '151030', name: 'Tomas' });
district.set('151031', { code: '151031', name: 'Tupe' });
district.set('151032', { code: '151032', name: 'Viñac' });
district.set('151033', { code: '151033', name: 'Vitis' });
// 16 - Loreto
// 1601 - Maynas
district.set('160101', { code: '160101', name: 'Iquitos' });
district.set('160102', { code: '160102', name: 'Alto Nanay' });
district.set('160103', { code: '160103', name: 'Fernando Lores' });
district.set('160104', { code: '160104', name: 'Indiana' });
district.set('160105', { code: '160105', name: 'Las Amazonas' });
district.set('160106', { code: '160106', name: 'Mazan' });
district.set('160107', { code: '160107', name: 'Napo' });
district.set('160108', { code: '160108', name: 'Punchana' });
district.set('160110', { code: '160110', name: 'Torres Causana' });
district.set('160112', { code: '160112', name: 'Belén' });
district.set('160113', { code: '160113', name: 'San Juan Bautista' });
// 1602 - Alto Amazonas
district.set('160201', { code: '160201', name: 'Yurimaguas' });
district.set('160202', { code: '160202', name: 'Balsapuerto' });
district.set('160205', { code: '160205', name: 'Jeberos' });
district.set('160206', { code: '160206', name: 'Lagunas' });
district.set('160210', { code: '160210', name: 'Santa Cruz' });
district.set('160211', { code: '160211', name: 'Teniente Cesar López Rojas' });
// 1603 - Loreto
district.set('160301', { code: '160301', name: 'Nauta' });
district.set('160302', { code: '160302', name: 'Parinari' });
district.set('160303', { code: '160303', name: 'Tigre' });
district.set('160304', { code: '160304', name: 'Trompeteros' });
district.set('160305', { code: '160305', name: 'Urarinas' });
// 1604 - Mariscal Ramón Castilla
district.set('160401', { code: '160401', name: 'Ramón Castilla' });
district.set('160402', { code: '160402', name: 'Pebas' });
district.set('160403', { code: '160403', name: 'Yavari' });
district.set('160404', { code: '160404', name: 'San Pablo' });
// 1605 - Requena
district.set('160501', { code: '160501', name: 'Requena' });
district.set('160502', { code: '160502', name: 'Alto Tapiche' });
district.set('160503', { code: '160503', name: 'Capelo' });
district.set('160504', { code: '160504', name: 'Emilio San Martín' });
district.set('160505', { code: '160505', name: 'Maquia' });
district.set('160506', { code: '160506', name: 'Puinahua' });
district.set('160507', { code: '160507', name: 'Saquena' });
district.set('160508', { code: '160508', name: 'Soplin' });
district.set('160509', { code: '160509', name: 'Tapiche' });
district.set('160510', { code: '160510', name: 'Jenaro Herrera' });
district.set('160511', { code: '160511', name: 'Yaquerana' });
// 1606 - Ucayali
district.set('160601', { code: '160601', name: 'Contamana' });
district.set('160602', { code: '160602', name: 'Inahuaya' });
district.set('160603', { code: '160603', name: 'Padre Márquez' });
district.set('160604', { code: '160604', name: 'Pampa Hermosa' });
district.set('160605', { code: '160605', name: 'Sarayacu' });
district.set('160606', { code: '160606', name: 'Vargas Guerra' });
// 1607 - Datem del Marañón
district.set('160701', { code: '160701', name: 'Barranca' });
district.set('160702', { code: '160702', name: 'Cahuapanas' });
district.set('160703', { code: '160703', name: 'Manseriche' });
district.set('160704', { code: '160704', name: 'Morona' });
district.set('160705', { code: '160705', name: 'Pastaza' });
district.set('160706', { code: '160706', name: 'Andoas' });
// 1608 - Putumayo
district.set('160801', { code: '160801', name: 'Putumayo' });
district.set('160802', { code: '160802', name: 'Rosa Panduro' });
district.set('160803', { code: '160803', name: 'Teniente Manuel Clavero' });
district.set('160804', { code: '160804', name: 'Yaguas' });
// 17 - Madre de Dios
// 1701 - Tambopata
district.set('170101', { code: '170101', name: 'Tambopata' });
district.set('170102', { code: '170102', name: 'Inambari' });
district.set('170103', { code: '170103', name: 'Las Piedras' });
district.set('170104', { code: '170104', name: 'Laberinto' });
// 1702 - Manu
district.set('170201', { code: '170201', name: 'Manu' });
district.set('170202', { code: '170202', name: 'Fitzcarrald' });
district.set('170203', { code: '170203', name: 'Madre de Dios' });
district.set('170204', { code: '170204', name: 'Huepetuhe' });
// 1703 - Tahuamanu
district.set('170301', { code: '170301', name: 'Iñapari' });
district.set('170302', { code: '170302', name: 'Iberia' });
district.set('170303', { code: '170303', name: 'Tahuamanu' });
// 18 - Moquegua
// 1801 - Mariscal Nieto
district.set('180101', { code: '180101', name: 'Moquegua' });
district.set('180102', { code: '180102', name: 'Carumas' });
district.set('180103', { code: '180103', name: 'Cuchumbaya' });
district.set('180104', { code: '180104', name: 'Samegua' });
district.set('180105', { code: '180105', name: 'San Cristóbal' });
district.set('180106', { code: '180106', name: 'Torata' });
// 1802 - General Sánchez Cerro
district.set('180201', { code: '180201', name: 'Omate' });
district.set('180202', { code: '180202', name: 'Chojata' });
district.set('180203', { code: '180203', name: 'Coalaque' });
district.set('180204', { code: '180204', name: 'Ichuña' });
district.set('180205', { code: '180205', name: 'La Capilla' });
district.set('180206', { code: '180206', name: 'Lloque' });
district.set('180207', { code: '180207', name: 'Matalaque' });
district.set('180208', { code: '180208', name: 'Puquina' });
district.set('180209', { code: '180209', name: 'Quinistaquillas' });
district.set('180210', { code: '180210', name: 'Ubinas' });
district.set('180211', { code: '180211', name: 'Yunga' });
// 1803 - Ilo
district.set('180301', { code: '180301', name: 'Ilo' });
district.set('180302', { code: '180302', name: 'El Algarrobal' });
district.set('180303', { code: '180303', name: 'Pacocha' });
// 19 - Pasco
// 1901 - Pasco
district.set('190101', { code: '190101', name: 'Chaupimarca' });
district.set('190102', { code: '190102', name: 'Huachon' });
district.set('190103', { code: '190103', name: 'Huariaca' });
district.set('190104', { code: '190104', name: 'Huayllay' });
district.set('190105', { code: '190105', name: 'Ninacaca' });
district.set('190106', { code: '190106', name: 'Pallanchacra' });
district.set('190107', { code: '190107', name: 'Paucartambo' });
district.set('190108', {
  code: '190108',
  name: 'San Francisco de Asís de Yarusyacan',
});
district.set('190109', { code: '190109', name: 'Simon Bolívar' });
district.set('190110', { code: '190110', name: 'Ticlacayan' });
district.set('190111', { code: '190111', name: 'Tinyahuarco' });
district.set('190112', { code: '190112', name: 'Vicco' });
district.set('190113', { code: '190113', name: 'Yanacancha' });
// 1902 - Daniel Alcides Carrión
district.set('190201', { code: '190201', name: 'Yanahuanca' });
district.set('190202', { code: '190202', name: 'Chacayan' });
district.set('190203', { code: '190203', name: 'Goyllarisquizga' });
district.set('190204', { code: '190204', name: 'Paucar' });
district.set('190205', { code: '190205', name: 'San Pedro de Pillao' });
district.set('190206', { code: '190206', name: 'Santa Ana de Tusi' });
district.set('190207', { code: '190207', name: 'Tapuc' });
district.set('190208', { code: '190208', name: 'Vilcabamba' });
// 1903 - Oxapampa
district.set('190301', { code: '190301', name: 'Oxapampa' });
district.set('190302', { code: '190302', name: 'Chontabamba' });
district.set('190303', { code: '190303', name: 'Huancabamba' });
district.set('190304', { code: '190304', name: 'Palcazu' });
district.set('190305', { code: '190305', name: 'Pozuzo' });
district.set('190306', { code: '190306', name: 'Puerto Bermúdez' });
district.set('190307', { code: '190307', name: 'Villa Rica' });
district.set('190308', { code: '190308', name: 'Constitución' });
// 20 - Piura
// 2001 - Piura
district.set('200101', { code: '200101', name: 'Piura' });
district.set('200104', { code: '200104', name: 'Castilla' });
district.set('200105', { code: '200105', name: 'Catacaos' });
district.set('200107', { code: '200107', name: 'Cura Mori' });
district.set('200108', { code: '200108', name: 'El Tallan' });
district.set('200109', { code: '200109', name: 'La Arena' });
district.set('200110', { code: '200110', name: 'La Unión' });
district.set('200111', { code: '200111', name: 'Las Lomas' });
district.set('200114', { code: '200114', name: 'Tambo Grande' });
district.set('200115', { code: '200115', name: 'Veintiseis de Octubre' });
// 2002 - Ayabaca
district.set('200201', { code: '200201', name: 'Ayabaca' });
district.set('200202', { code: '200202', name: 'Frias' });
district.set('200203', { code: '200203', name: 'Jilili' });
district.set('200204', { code: '200204', name: 'Lagunas' });
district.set('200205', { code: '200205', name: 'Montero' });
district.set('200206', { code: '200206', name: 'Pacaipampa' });
district.set('200207', { code: '200207', name: 'Paimas' });
district.set('200208', { code: '200208', name: 'Sapillica' });
district.set('200209', { code: '200209', name: 'Sicchez' });
district.set('200210', { code: '200210', name: 'Suyo' });
// 2003 - Huancabamba
district.set('200301', { code: '200301', name: 'Huancabamba' });
district.set('200302', { code: '200302', name: 'Canchaque' });
district.set('200303', { code: '200303', name: 'El Carmen de la Frontera' });
district.set('200304', { code: '200304', name: 'Huarmaca' });
district.set('200305', { code: '200305', name: 'Lalaquiz' });
district.set('200306', { code: '200306', name: 'San Miguel de El Faique' });
district.set('200307', { code: '200307', name: 'Sondor' });
district.set('200308', { code: '200308', name: 'Sondorillo' });
// 2004 - Morropón
district.set('200401', { code: '200401', name: 'Chulucanas' });
district.set('200402', { code: '200402', name: 'Buenos Aires' });
district.set('200403', { code: '200403', name: 'Chalaco' });
district.set('200404', { code: '200404', name: 'La Matanza' });
district.set('200405', { code: '200405', name: 'Morropon' });
district.set('200406', { code: '200406', name: 'Salitral' });
district.set('200407', { code: '200407', name: 'San Juan de Bigote' });
district.set('200408', { code: '200408', name: 'Santa Catalina de Mossa' });
district.set('200409', { code: '200409', name: 'Santo Domingo' });
district.set('200410', { code: '200410', name: 'Yamango' });
// 2005 - Paita
district.set('200501', { code: '200501', name: 'Paita' });
district.set('200502', { code: '200502', name: 'Amotape' });
district.set('200503', { code: '200503', name: 'Arenal' });
district.set('200504', { code: '200504', name: 'Colan' });
district.set('200505', { code: '200505', name: 'La Huaca' });
district.set('200506', { code: '200506', name: 'Tamarindo' });
district.set('200507', { code: '200507', name: 'Vichayal' });
// 2006 - Sullana
district.set('200601', { code: '200601', name: 'Sullana' });
district.set('200602', { code: '200602', name: 'Bellavista' });
district.set('200603', { code: '200603', name: 'Ignacio Escudero' });
district.set('200604', { code: '200604', name: 'Lancones' });
district.set('200605', { code: '200605', name: 'Marcavelica' });
district.set('200606', { code: '200606', name: 'Miguel Checa' });
district.set('200607', { code: '200607', name: 'Querecotillo' });
district.set('200608', { code: '200608', name: 'Salitral' });
// 2007 - Talara
district.set('200701', { code: '200701', name: 'Pariñas' });
district.set('200702', { code: '200702', name: 'El Alto' });
district.set('200703', { code: '200703', name: 'La Brea' });
district.set('200704', { code: '200704', name: 'Lobitos' });
district.set('200705', { code: '200705', name: 'Los Organos' });
district.set('200706', { code: '200706', name: 'Mancora' });
// 2008 - Sechura
district.set('200801', { code: '200801', name: 'Sechura' });
district.set('200802', { code: '200802', name: 'Bellavista de la Unión' });
district.set('200803', { code: '200803', name: 'Bernal' });
district.set('200804', { code: '200804', name: 'Cristo Nos Valga' });
district.set('200805', { code: '200805', name: 'Vice' });
district.set('200806', { code: '200806', name: 'Rinconada Llicuar' });
// 21 - Puno
// 2101 - Puno
district.set('210101', { code: '210101', name: 'Puno' });
district.set('210102', { code: '210102', name: 'Acora' });
district.set('210103', { code: '210103', name: 'Amantani' });
district.set('210104', { code: '210104', name: 'Atuncolla' });
district.set('210105', { code: '210105', name: 'Capachica' });
district.set('210106', { code: '210106', name: 'Chucuito' });
district.set('210107', { code: '210107', name: 'Coata' });
district.set('210108', { code: '210108', name: 'Huata' });
district.set('210109', { code: '210109', name: 'Mañazo' });
district.set('210110', { code: '210110', name: 'Paucarcolla' });
district.set('210111', { code: '210111', name: 'Pichacani' });
district.set('210112', { code: '210112', name: 'Plateria' });
district.set('210113', { code: '210113', name: 'San Antonio' });
district.set('210114', { code: '210114', name: 'Tiquillaca' });
district.set('210115', { code: '210115', name: 'Vilque' });
// 2102 - Azángaro
district.set('210201', { code: '210201', name: 'Azángaro' });
district.set('210202', { code: '210202', name: 'Achaya' });
district.set('210203', { code: '210203', name: 'Arapa' });
district.set('210204', { code: '210204', name: 'Asillo' });
district.set('210205', { code: '210205', name: 'Caminaca' });
district.set('210206', { code: '210206', name: 'Chupa' });
district.set('210207', { code: '210207', name: 'José Domingo Choquehuanca' });
district.set('210208', { code: '210208', name: 'Muñani' });
district.set('210209', { code: '210209', name: 'Potoni' });
district.set('210210', { code: '210210', name: 'Saman' });
district.set('210211', { code: '210211', name: 'San Anton' });
district.set('210212', { code: '210212', name: 'San José' });
district.set('210213', { code: '210213', name: 'San Juan de Salinas' });
district.set('210214', { code: '210214', name: 'Santiago de Pupuja' });
district.set('210215', { code: '210215', name: 'Tirapata' });
// 2103 - Carabaya
district.set('210301', { code: '210301', name: 'Macusani' });
district.set('210302', { code: '210302', name: 'Ajoyani' });
district.set('210303', { code: '210303', name: 'Ayapata' });
district.set('210304', { code: '210304', name: 'Coasa' });
district.set('210305', { code: '210305', name: 'Corani' });
district.set('210306', { code: '210306', name: 'Crucero' });
district.set('210307', { code: '210307', name: 'Ituata' });
district.set('210308', { code: '210308', name: 'Ollachea' });
district.set('210309', { code: '210309', name: 'San Gaban' });
district.set('210310', { code: '210310', name: 'Usicayos' });
// 2104 - Chucuito
district.set('210401', { code: '210401', name: 'Juli' });
district.set('210402', { code: '210402', name: 'Desaguadero' });
district.set('210403', { code: '210403', name: 'Huacullani' });
district.set('210404', { code: '210404', name: 'Kelluyo' });
district.set('210405', { code: '210405', name: 'Pisacoma' });
district.set('210406', { code: '210406', name: 'Pomata' });
district.set('210407', { code: '210407', name: 'Zepita' });
// 2105 - El Collao
district.set('210501', { code: '210501', name: 'Ilave' });
district.set('210502', { code: '210502', name: 'Capazo' });
district.set('210503', { code: '210503', name: 'Pilcuyo' });
district.set('210504', { code: '210504', name: 'Santa Rosa' });
district.set('210505', { code: '210505', name: 'Conduriri' });
// 2106 - Huancané
district.set('210601', { code: '210601', name: 'Huancane' });
district.set('210602', { code: '210602', name: 'Cojata' });
district.set('210603', { code: '210603', name: 'Huatasani' });
district.set('210604', { code: '210604', name: 'Inchupalla' });
district.set('210605', { code: '210605', name: 'Pusi' });
district.set('210606', { code: '210606', name: 'Rosaspata' });
district.set('210607', { code: '210607', name: 'Taraco' });
district.set('210608', { code: '210608', name: 'Vilque Chico' });
// 2107 - Lampa
district.set('210701', { code: '210701', name: 'Lampa' });
district.set('210702', { code: '210702', name: 'Cabanilla' });
district.set('210703', { code: '210703', name: 'Calapuja' });
district.set('210704', { code: '210704', name: 'Nicasio' });
district.set('210705', { code: '210705', name: 'Ocuviri' });
district.set('210706', { code: '210706', name: 'Palca' });
district.set('210707', { code: '210707', name: 'Paratia' });
district.set('210708', { code: '210708', name: 'Pucara' });
district.set('210709', { code: '210709', name: 'Santa Lucia' });
district.set('210710', { code: '210710', name: 'Vilavila' });
// 2108 - Melgar
district.set('210801', { code: '210801', name: 'Ayaviri' });
district.set('210802', { code: '210802', name: 'Antauta' });
district.set('210803', { code: '210803', name: 'Cupi' });
district.set('210804', { code: '210804', name: 'Llalli' });
district.set('210805', { code: '210805', name: 'Macari' });
district.set('210806', { code: '210806', name: 'Nuñoa' });
district.set('210807', { code: '210807', name: 'Orurillo' });
district.set('210808', { code: '210808', name: 'Santa Rosa' });
district.set('210809', { code: '210809', name: 'Umachiri' });
// 2109 - Moho
district.set('210901', { code: '210901', name: 'Moho' });
district.set('210902', { code: '210902', name: 'Conima' });
district.set('210903', { code: '210903', name: 'Huayrapata' });
district.set('210904', { code: '210904', name: 'Tilali' });
// 2110 - San Antonio de Putina
district.set('211001', { code: '211001', name: 'Putina' });
district.set('211002', { code: '211002', name: 'Ananea' });
district.set('211003', { code: '211003', name: 'Pedro Vilca Apaza' });
district.set('211004', { code: '211004', name: 'Quilcapuncu' });
district.set('211005', { code: '211005', name: 'Sina' });
// 2111 - San Román
district.set('211101', { code: '211101', name: 'Juliaca' });
district.set('211102', { code: '211102', name: 'Cabana' });
district.set('211103', { code: '211103', name: 'Cabanillas' });
district.set('211104', { code: '211104', name: 'Caracoto' });
// 2112 - Sandia
district.set('211201', { code: '211201', name: 'Sandia' });
district.set('211202', { code: '211202', name: 'Cuyocuyo' });
district.set('211203', { code: '211203', name: 'Limbani' });
district.set('211204', { code: '211204', name: 'Patambuco' });
district.set('211205', { code: '211205', name: 'Phara' });
district.set('211206', { code: '211206', name: 'Quiaca' });
district.set('211207', { code: '211207', name: 'San Juan del Oro' });
district.set('211208', { code: '211208', name: 'Yanahuaya' });
district.set('211209', { code: '211209', name: 'Alto Inambari' });
district.set('211210', { code: '211210', name: 'San Pedro de Putina Punco' });
// 2113 - Yunguyo
district.set('211301', { code: '211301', name: 'Yunguyo' });
district.set('211302', { code: '211302', name: 'Anapia' });
district.set('211303', { code: '211303', name: 'Copani' });
district.set('211304', { code: '211304', name: 'Cuturapi' });
district.set('211305', { code: '211305', name: 'Ollaraya' });
district.set('211306', { code: '211306', name: 'Tinicachi' });
district.set('211307', { code: '211307', name: 'Unicachi' });
// 22 - San Martín
// 2201 - Moyobamba
district.set('220101', { code: '220101', name: 'Moyobamba' });
district.set('220102', { code: '220102', name: 'Calzada' });
district.set('220103', { code: '220103', name: 'Habana' });
district.set('220104', { code: '220104', name: 'Jepelacio' });
district.set('220105', { code: '220105', name: 'Soritor' });
district.set('220106', { code: '220106', name: 'Yantalo' });
// 2202 - Bellavista
district.set('220201', { code: '220201', name: 'Bellavista' });
district.set('220202', { code: '220202', name: 'Alto Biavo' });
district.set('220203', { code: '220203', name: 'Bajo Biavo' });
district.set('220204', { code: '220204', name: 'Huallaga' });
district.set('220205', { code: '220205', name: 'San Pablo' });
district.set('220206', { code: '220206', name: 'San Rafael' });
// 2203 - El Dorado
district.set('220301', { code: '220301', name: 'San José de Sisa' });
district.set('220302', { code: '220302', name: 'Agua Blanca' });
district.set('220303', { code: '220303', name: 'San Martín' });
district.set('220304', { code: '220304', name: 'Santa Rosa' });
district.set('220305', { code: '220305', name: 'Shatoja' });
// 2204 - Huallaga
district.set('220401', { code: '220401', name: 'Saposoa' });
district.set('220402', { code: '220402', name: 'Alto Saposoa' });
district.set('220403', { code: '220403', name: 'El Eslabón' });
district.set('220404', { code: '220404', name: 'Piscoyacu' });
district.set('220405', { code: '220405', name: 'Sacanche' });
district.set('220406', { code: '220406', name: 'Tingo de Saposoa' });
// 2205 - Lamas
district.set('220501', { code: '220501', name: 'Lamas' });
district.set('220502', { code: '220502', name: 'Alonso de Alvarado' });
district.set('220503', { code: '220503', name: 'Barranquita' });
district.set('220504', { code: '220504', name: 'Caynarachi' });
district.set('220505', { code: '220505', name: 'Cuñumbuqui' });
district.set('220506', { code: '220506', name: 'Pinto Recodo' });
district.set('220507', { code: '220507', name: 'Rumisapa' });
district.set('220508', { code: '220508', name: 'San Roque de Cumbaza' });
district.set('220509', { code: '220509', name: 'Shanao' });
district.set('220510', { code: '220510', name: 'Tabalosos' });
district.set('220511', { code: '220511', name: 'Zapatero' });
// 2206 - Mariscal Cáceres
district.set('220601', { code: '220601', name: 'Juanjuí' });
district.set('220602', { code: '220602', name: 'Campanilla' });
district.set('220603', { code: '220603', name: 'Huicungo' });
district.set('220604', { code: '220604', name: 'Pachiza' });
district.set('220605', { code: '220605', name: 'Pajarillo' });
// 2207 - Picota
district.set('220701', { code: '220701', name: 'Picota' });
district.set('220702', { code: '220702', name: 'Buenos Aires' });
district.set('220703', { code: '220703', name: 'Caspisapa' });
district.set('220704', { code: '220704', name: 'Pilluana' });
district.set('220705', { code: '220705', name: 'Pucacaca' });
district.set('220706', { code: '220706', name: 'San Cristóbal' });
district.set('220707', { code: '220707', name: 'San Hilarión' });
district.set('220708', { code: '220708', name: 'Shamboyacu' });
district.set('220709', { code: '220709', name: 'Tingo de Ponasa' });
district.set('220710', { code: '220710', name: 'Tres Unidos' });
// 2208 - Rioja
district.set('220801', { code: '220801', name: 'Rioja' });
district.set('220802', { code: '220802', name: 'Awajun' });
district.set('220803', { code: '220803', name: 'Elías Soplin Vargas' });
district.set('220804', { code: '220804', name: 'Nueva Cajamarca' });
district.set('220805', { code: '220805', name: 'Pardo Miguel' });
district.set('220806', { code: '220806', name: 'Posic' });
district.set('220807', { code: '220807', name: 'San Fernando' });
district.set('220808', { code: '220808', name: 'Yorongos' });
district.set('220809', { code: '220809', name: 'Yuracyacu' });
// 2209 - San Martín
district.set('220901', { code: '220901', name: 'Tarapoto' });
district.set('220902', { code: '220902', name: 'Alberto Leveau' });
district.set('220903', { code: '220903', name: 'Cacatachi' });
district.set('220904', { code: '220904', name: 'Chazuta' });
district.set('220905', { code: '220905', name: 'Chipurana' });
district.set('220906', { code: '220906', name: 'El Porvenir' });
district.set('220907', { code: '220907', name: 'Huimbayoc' });
district.set('220908', { code: '220908', name: 'Juan Guerra' });
district.set('220909', { code: '220909', name: 'La Banda de Shilcayo' });
district.set('220910', { code: '220910', name: 'Morales' });
district.set('220911', { code: '220911', name: 'Papaplaya' });
district.set('220912', { code: '220912', name: 'San Antonio' });
district.set('220913', { code: '220913', name: 'Sauce' });
district.set('220914', { code: '220914', name: 'Shapaja' });
// 2210 - Tocache
district.set('221001', { code: '221001', name: 'Tocache' });
district.set('221002', { code: '221002', name: 'Nuevo Progreso' });
district.set('221003', { code: '221003', name: 'Polvora' });
district.set('221004', { code: '221004', name: 'Shunte' });
district.set('221005', { code: '221005', name: 'Uchiza' });
// 23 - Tacna
// 2301 - Tacna
district.set('230101', { code: '230101', name: 'Tacna' });
district.set('230102', { code: '230102', name: 'Alto de la Alianza' });
district.set('230103', { code: '230103', name: 'Calana' });
district.set('230104', { code: '230104', name: 'Ciudad Nueva' });
district.set('230105', { code: '230105', name: 'Inclan' });
district.set('230106', { code: '230106', name: 'Pachia' });
district.set('230107', { code: '230107', name: 'Palca' });
district.set('230108', { code: '230108', name: 'Pocollay' });
district.set('230109', { code: '230109', name: 'Sama' });
district.set('230110', {
  code: '230110',
  name: 'Coronel Gregorio Albarracín Lanchipa',
});
district.set('230111', { code: '230111', name: 'La Yarada los Palos' });
// 2302 - Candarave
district.set('230201', { code: '230201', name: 'Candarave' });
district.set('230202', { code: '230202', name: 'Cairani' });
district.set('230203', { code: '230203', name: 'Camilaca' });
district.set('230204', { code: '230204', name: 'Curibaya' });
district.set('230205', { code: '230205', name: 'Huanuara' });
district.set('230206', { code: '230206', name: 'Quilahuani' });
// 2303 - Jorge Basadre
district.set('230301', { code: '230301', name: 'Locumba' });
district.set('230302', { code: '230302', name: 'Ilabaya' });
district.set('230303', { code: '230303', name: 'Ite' });
// 2304 - Tarata
district.set('230401', { code: '230401', name: 'Tarata' });
district.set('230402', { code: '230402', name: 'Héroes Albarracín' });
district.set('230403', { code: '230403', name: 'Estique' });
district.set('230404', { code: '230404', name: 'Estique-Pampa' });
district.set('230405', { code: '230405', name: 'Sitajara' });
district.set('230406', { code: '230406', name: 'Susapaya' });
district.set('230407', { code: '230407', name: 'Tarucachi' });
district.set('230408', { code: '230408', name: 'Ticaco' });
// 24 - Tumbes
// 2401 - Tumbes
district.set('240101', { code: '240101', name: 'Tumbes' });
district.set('240102', { code: '240102', name: 'Corrales' });
district.set('240103', { code: '240103', name: 'La Cruz' });
district.set('240104', { code: '240104', name: 'Pampas de Hospital' });
district.set('240105', { code: '240105', name: 'San Jacinto' });
district.set('240106', { code: '240106', name: 'San Juan de la Virgen' });
// 2402 - Contralmirante Villar
district.set('240201', { code: '240201', name: 'Zorritos' });
district.set('240202', { code: '240202', name: 'Casitas' });
district.set('240203', { code: '240203', name: 'Canoas de Punta Sal' });
// 2403 - Zarumilla
district.set('240301', { code: '240301', name: 'Zarumilla' });
district.set('240302', { code: '240302', name: 'Aguas Verdes' });
district.set('240303', { code: '240303', name: 'Matapalo' });
district.set('240304', { code: '240304', name: 'Papayal' });
// 25 - Ucayali
// 2501 - Coronel Portillo
district.set('250101', { code: '250101', name: 'Calleria' });
district.set('250102', { code: '250102', name: 'Campoverde' });
district.set('250103', { code: '250103', name: 'Iparia' });
district.set('250104', { code: '250104', name: 'Masisea' });
district.set('250105', { code: '250105', name: 'Yarinacocha' });
district.set('250106', { code: '250106', name: 'Nueva Requena' });
district.set('250107', { code: '250107', name: 'Manantay' });
// 2502 - Atalaya
district.set('250201', { code: '250201', name: 'Raymondi' });
district.set('250202', { code: '250202', name: 'Sepahua' });
district.set('250203', { code: '250203', name: 'Tahuania' });
district.set('250204', { code: '250204', name: 'Yurua' });
// 2503 - Padre Abad
district.set('250301', { code: '250301', name: 'Padre Abad' });
district.set('250302', { code: '250302', name: 'Irazola' });
district.set('250303', { code: '250303', name: 'Curimana' });
district.set('250304', { code: '250304', name: 'Neshuya' });
district.set('250305', { code: '250305', name: 'Alexander Von Humboldt' });
// 2504 - Purús
district.set('250401', { code: '250401', name: 'Purus' });

export { district };
