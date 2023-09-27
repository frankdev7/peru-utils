import type { IUbigeo } from '../@types';

const provinces: Map<string, IUbigeo> = new Map();
// 01 - Amazonas
provinces.set('0101', { code: '0101', name: 'Chachapoyas' });
provinces.set('0102', { code: '0102', name: 'Bagua' });
provinces.set('0103', { code: '0103', name: 'Bongara' });
provinces.set('0104', { code: '0104', name: 'Condorcanqui' });
provinces.set('0105', { code: '0105', name: 'Luya' });
provinces.set('0106', { code: '0106', name: 'Rodriguez de Mendoza' });
provinces.set('0107', { code: '0107', name: 'Utcubamba' });
// 02 - 'Ancash'
provinces.set('0201', { code: '0201', name: 'Huaraz' });
provinces.set('0202', { code: '0202', name: 'Aija' });
provinces.set('0203', { code: '0203', name: 'Antonio Raymondi' });
provinces.set('0204', { code: '0204', name: 'Asuncion' });
provinces.set('0205', { code: '0205', name: 'Bolognesi' });
provinces.set('0206', { code: '0206', name: 'Carhuaz' });
provinces.set('0207', { code: '0207', name: 'Carlos Fermin Fitzcarrald' });
provinces.set('0208', { code: '0208', name: 'Casma' });
provinces.set('0209', { code: '0209', name: 'Corongo' });
provinces.set('0210', { code: '0210', name: 'Huari' });
provinces.set('0211', { code: '0211', name: 'Huarmey' });
provinces.set('0212', { code: '0212', name: 'Huaylas' });
provinces.set('0213', { code: '0213', name: 'Mariscal Luzuriaga' });
provinces.set('0214', { code: '0214', name: 'Ocros' });
provinces.set('0215', { code: '0215', name: 'Pallasca' });
provinces.set('0216', { code: '0216', name: 'Pomabamba' });
provinces.set('0217', { code: '0217', name: 'Recuay' });
provinces.set('0218', { code: '0218', name: 'Santa' });
provinces.set('0219', { code: '0219', name: 'Sihuas' });
provinces.set('0220', { code: '0220', name: 'Yungay' });
// 03 - Apurimac
provinces.set('0301', { code: '0301', name: 'Abancay' });
provinces.set('0302', { code: '0302', name: 'Andahuaylas' });
provinces.set('0303', { code: '0303', name: 'Antabamba' });
provinces.set('0304', { code: '0304', name: 'Aymaraes' });
provinces.set('0305', { code: '0305', name: 'Cotabambas' });
provinces.set('0306', { code: '0306', name: 'Chincheros' });
provinces.set('0307', { code: '0307', name: 'Grau' });
// 04 - Arequipa
provinces.set('0401', { code: '0401', name: 'Arequipa' });
provinces.set('0402', { code: '0402', name: 'Camana' });
provinces.set('0403', { code: '0403', name: 'Caraveli' });
provinces.set('0404', { code: '0404', name: 'Castilla' });
provinces.set('0405', { code: '0405', name: 'Caylloma' });
provinces.set('0406', { code: '0406', name: 'Condesuyos' });
provinces.set('0407', { code: '0407', name: 'Islay' });
provinces.set('0408', { code: '0408', name: 'La Union' });
// 05 - Ayacucho
provinces.set('0501', { code: '0501', name: 'Huamanga' });
provinces.set('0502', { code: '0502', name: 'Cangallo' });
provinces.set('0503', { code: '0503', name: 'Huanca Sancos' });
provinces.set('0504', { code: '0504', name: 'Huanta' });
provinces.set('0505', { code: '0505', name: 'La Mar' });
provinces.set('0506', { code: '0506', name: 'Lucanas' });
provinces.set('0507', { code: '0507', name: 'Parinacochas' });
provinces.set('0508', { code: '0508', name: 'Pàucar del Sara Sara' });
provinces.set('0509', { code: '0509', name: 'Sucre' });
provinces.set('0510', { code: '0510', name: 'Victor Fajardo' });
provinces.set('0511', { code: '0511', name: 'Vilcas Huaman' });
// 06 - Cajamarca
provinces.set('0601', { code: '0601', name: 'Cajamarca' });
provinces.set('0602', { code: '0602', name: 'Cajabamba' });
provinces.set('0603', { code: '0603', name: 'Celendin' });
provinces.set('0604', { code: '0604', name: 'Chota' });
provinces.set('0605', { code: '0605', name: 'Contumaza' });
provinces.set('0606', { code: '0606', name: 'Cutervo' });
provinces.set('0607', { code: '0607', name: 'Hualgayoc' });
provinces.set('0608', { code: '0608', name: 'Jaen' });
provinces.set('0609', { code: '0609', name: 'San Ignacio' });
provinces.set('0610', { code: '0610', name: 'San Marcos' });
provinces.set('0611', { code: '0611', name: 'San Miguel' });
provinces.set('0612', { code: '0612', name: 'San Pablo' });
provinces.set('0613', { code: '0613', name: 'Santa Cruz' });
// 07 - Cusco
provinces.set('0701', { code: '0701', name: 'Cusco' });
provinces.set('0702', { code: '0702', name: 'Acomayo' });
provinces.set('0703', { code: '0703', name: 'Anta' });
provinces.set('0704', { code: '0704', name: 'Calca' });
provinces.set('0705', { code: '0705', name: 'Canas' });
provinces.set('0706', { code: '0706', name: 'Canchis' });
provinces.set('0707', { code: '0707', name: 'Chumbivilcas' });
provinces.set('0708', { code: '0708', name: 'Espinar' });
provinces.set('0709', { code: '0709', name: 'La Convencion' });
provinces.set('0710', { code: '0710', name: 'Paruro' });
provinces.set('0711', { code: '0711', name: 'Paucartambo' });
provinces.set('0712', { code: '0712', name: 'Quispicanchi' });
provinces.set('0713', { code: '0713', name: 'Urubamba' });
// 08 - Huancavelica
provinces.set('0801', { code: '0801', name: 'Huancavelica' });
provinces.set('0802', { code: '0802', name: 'Acobamba' });
provinces.set('0803', { code: '0803', name: 'Angaraes' });
provinces.set('0804', { code: '0804', name: 'Castrovirreyna' });
provinces.set('0805', { code: '0805', name: 'Churcampa' });
provinces.set('0806', { code: '0806', name: 'Huaytara' });
provinces.set('0807', { code: '0807', name: 'Tayacaja' });
// 09 - Huanuco
provinces.set('0901', { code: '0901', name: 'Huanuco' });
provinces.set('0902', { code: '0902', name: 'Ambo' });
provinces.set('0903', { code: '0903', name: 'Dos de Mayo' });
provinces.set('0904', { code: '0904', name: 'Huacaybamba' });
provinces.set('0905', { code: '0905', name: 'Huamalies' });
provinces.set('0906', { code: '0906', name: 'Leoncio Prado' });
provinces.set('0907', { code: '0907', name: 'Marañon' });
provinces.set('0908', { code: '0908', name: 'Pachitea' });
provinces.set('0909', { code: '0909', name: 'Puerto Inca' });
provinces.set('0910', { code: '0910', name: 'Lauricocha' });
provinces.set('0911', { code: '0911', name: 'Yarowilca' });
// 10 - Ica
provinces.set('1001', { code: '1001', name: 'Ica' });
provinces.set('1002', { code: '1002', name: 'Chincha' });
provinces.set('1003', { code: '1003', name: 'Nasca' });
provinces.set('1004', { code: '1004', name: 'Palpa' });
provinces.set('1005', { code: '1005', name: 'Pisco' });
// 11 - Junin
provinces.set('1101', { code: '1101', name: 'Huancayo' });
provinces.set('1102', { code: '1102', name: 'Concepcion' });
provinces.set('1103', { code: '1103', name: 'Chanchamayo' });
provinces.set('1104', { code: '1104', name: 'Jauja' });
provinces.set('1105', { code: '1105', name: 'Junin' });
provinces.set('1106', { code: '1106', name: 'Satipo' });
provinces.set('1107', { code: '1107', name: 'Tarma' });
provinces.set('1108', { code: '1108', name: 'Yauli' });
provinces.set('1109', { code: '1109', name: 'Chupaca' });
// 12 - La Libertad
provinces.set('1201', { code: '1201', name: 'Trujillo' });
provinces.set('1202', { code: '1202', name: 'Ascope' });
provinces.set('1203', { code: '1203', name: 'Bolivar' });
provinces.set('1204', { code: '1204', name: 'Chepen' });
provinces.set('1205', { code: '1205', name: 'Julcan' });
provinces.set('1206', { code: '1206', name: 'Otuzco' });
provinces.set('1207', { code: '1207', name: 'Pacasmayo' });
provinces.set('1208', { code: '1208', name: 'Pataz' });
provinces.set('1209', { code: '1209', name: 'Sanchez Carrion' });
provinces.set('1210', { code: '1210', name: 'Santiago de Chuco' });
provinces.set('1211', { code: '1211', name: 'Gran Chimu' });
provinces.set('1212', { code: '1212', name: 'Viru' });
// 13 - Lambayeque
provinces.set('1301', { code: '1301', name: 'Chiclayo' });
provinces.set('1302', { code: '1302', name: 'Ferreñafe' });
provinces.set('1303', { code: '1303', name: 'Lambayeque' });
// 14 - Lima
provinces.set('1401', { code: '1401', name: 'Lima' });
provinces.set('1402', { code: '1402', name: 'Barranca' });
provinces.set('1403', { code: '1403', name: 'Cajatambo' });
provinces.set('1404', { code: '1404', name: 'Canta' });
provinces.set('1405', { code: '1405', name: 'Cañete' });
provinces.set('1406', { code: '1406', name: 'Huaral' });
provinces.set('1407', { code: '1407', name: 'Huarochiri' });
provinces.set('1408', { code: '1408', name: 'Huaura' });
provinces.set('1409', { code: '1409', name: 'Oyon' });
provinces.set('1410', { code: '1410', name: 'Yauyos' });
// 15 - Loreto
provinces.set('1501', { code: '1501', name: 'Maynas' });
provinces.set('1502', { code: '1502', name: 'Alto Amazonas' });
provinces.set('1503', { code: '1503', name: 'Loreto' });
provinces.set('1504', { code: '1504', name: 'Mariscal Ramon Castilla' });
provinces.set('1505', { code: '1505', name: 'Requena' });
provinces.set('1506', { code: '1506', name: 'Ucayali' });
provinces.set('1507', { code: '1507', name: 'Datem del Marañon' });
provinces.set('1508', { code: '1508', name: 'Putumayo' });
// 16 - Madre de Dios{code:  de Di, name:
provinces.set('1601', { code: '1601', name: 'Tambopata' });
provinces.set('1602', { code: '1602', name: 'Manu' });
provinces.set('1603', { code: '1603', name: 'Tahuamanu' });
// 17 - Moquegua
provinces.set('1701', { code: '1701', name: 'Mariscal Nieto' });
provinces.set('1702', { code: '1702', name: 'General Sanchez Cerro' });
provinces.set('1703', { code: '1703', name: 'Ilo' });
// 18 - Pasco
provinces.set('1801', { code: '1801', name: 'Pasco' });
provinces.set('1802', { code: '1802', name: 'Daniel Alcides Carrion' });
provinces.set('1803', { code: '1803', name: 'Oxapampa' });
// 19 - Piura
provinces.set('1901', { code: '1901', name: 'Piura' });
provinces.set('1902', { code: '1902', name: 'Ayabaca' });
provinces.set('1903', { code: '1903', name: 'Huancabamba' });
provinces.set('1904', { code: '1904', name: 'Morropon' });
provinces.set('1905', { code: '1905', name: 'Paita' });
provinces.set('1906', { code: '1906', name: 'Sullana' });
provinces.set('1907', { code: '1907', name: 'Talara' });
provinces.set('1908', { code: '1908', name: 'Sechura' });
// 20 - Puno
provinces.set('2001', { code: '2001', name: 'Puno' });
provinces.set('2002', { code: '2002', name: 'Azangaro' });
provinces.set('2003', { code: '2003', name: 'Carabaya' });
provinces.set('2004', { code: '2004', name: 'Chucuito' });
provinces.set('2005', { code: '2005', name: 'El Collao' });
provinces.set('2006', { code: '2006', name: 'Huancane' });
provinces.set('2007', { code: '2007', name: 'Lampa' });
provinces.set('2008', { code: '2008', name: 'Melgar' });
provinces.set('2009', { code: '2009', name: 'Moho' });
provinces.set('2010', { code: '2010', name: 'San Antonio de Putina' });
provinces.set('2011', { code: '2011', name: 'San Roman' });
provinces.set('2012', { code: '2012', name: 'Sandia' });
provinces.set('2013', { code: '2013', name: 'Yunguyo' });
// 21 - San Martin
provinces.set('2101', { code: '2101', name: 'Moyobamba' });
provinces.set('2102', { code: '2102', name: 'Bellavista' });
provinces.set('2103', { code: '2103', name: 'El Dorado' });
provinces.set('2104', { code: '2104', name: 'Huallaga' });
provinces.set('2105', { code: '2105', name: 'Lamas' });
provinces.set('2106', { code: '2106', name: 'Mariscal Caceres' });
provinces.set('2107', { code: '2107', name: 'Picota' });
provinces.set('2108', { code: '2108', name: 'Rioja' });
provinces.set('2109', { code: '2109', name: 'San Martin' });
provinces.set('2110', { code: '2110', name: 'Tocache' });
// 22 - Tacna
provinces.set('2201', { code: '2201', name: 'Tacna' });
provinces.set('2202', { code: '2202', name: 'Candarave' });
provinces.set('2203', { code: '2203', name: 'Jorge Basadre' });
provinces.set('2204', { code: '2204', name: 'Tarata' });
// 23 - Tumbes
provinces.set('2301', { code: '2301', name: 'Tumbes' });
provinces.set('2302', { code: '2302', name: 'Contralmirante Villar' });
provinces.set('2303', { code: '2303', name: 'Zarumilla' });
// 24 - Callao
provinces.set('2401', { code: '2401', name: 'Callao' });
// 25 - Ucayali
provinces.set('2501', { code: '2501', name: 'Coronel Portillo' });
provinces.set('2502', { code: '2502', name: 'Atalaya' });
provinces.set('2503', { code: '2503', name: 'Padre Abad' });
provinces.set('2504', { code: '2504', name: 'Purus' });

export { provinces };
