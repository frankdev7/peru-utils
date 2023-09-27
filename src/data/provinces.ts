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
// 07 - Callao
provinces.set('0701', { code: '0701', name: 'Prov. Const. del Callao' });
// 08 - Cusco
provinces.set('0801', { code: '0801', name: 'Cusco' });
provinces.set('0802', { code: '0802', name: 'Acomayo' });
provinces.set('0803', { code: '0803', name: 'Anta' });
provinces.set('0804', { code: '0804', name: 'Calca' });
provinces.set('0805', { code: '0805', name: 'Canas' });
provinces.set('0806', { code: '0806', name: 'Canchis' });
provinces.set('0807', { code: '0807', name: 'Chumbivilcas' });
provinces.set('0808', { code: '0808', name: 'Espinar' });
provinces.set('0809', { code: '0809', name: 'La Convencion' });
provinces.set('0810', { code: '0810', name: 'Paruro' });
provinces.set('0811', { code: '0811', name: 'Paucartambo' });
provinces.set('0812', { code: '0812', name: 'Quispicanchi' });
provinces.set('0813', { code: '0813', name: 'Urubamba' });
// 09 - Huancavelica
provinces.set('0901', { code: '0901', name: 'Huancavelica' });
provinces.set('0902', { code: '0902', name: 'Acobamba' });
provinces.set('0903', { code: '0903', name: 'Angaraes' });
provinces.set('0904', { code: '0904', name: 'Castrovirreyna' });
provinces.set('0905', { code: '0905', name: 'Churcampa' });
provinces.set('0906', { code: '0906', name: 'Huaytara' });
provinces.set('0907', { code: '0907', name: 'Tayacaja' });
// 10 - Huanuco
provinces.set('1001', { code: '1001', name: 'Huanuco' });
provinces.set('1002', { code: '1002', name: 'Ambo' });
provinces.set('1003', { code: '1003', name: 'Dos de Mayo' });
provinces.set('1004', { code: '1004', name: 'Huacaybamba' });
provinces.set('1005', { code: '1005', name: 'Huamalies' });
provinces.set('1006', { code: '1006', name: 'Leoncio Prado' });
provinces.set('1007', { code: '1007', name: 'Marañon' });
provinces.set('1008', { code: '1008', name: 'Pachitea' });
provinces.set('1009', { code: '1009', name: 'Puerto Inca' });
provinces.set('1010', { code: '1010', name: 'Lauricocha' });
provinces.set('1011', { code: '1011', name: 'Yarowilca' });
// 11 - Ica
provinces.set('1101', { code: '1101', name: 'Ica' });
provinces.set('1102', { code: '1102', name: 'Chincha' });
provinces.set('1103', { code: '1103', name: 'Nasca' });
provinces.set('1104', { code: '1104', name: 'Palpa' });
provinces.set('1105', { code: '1105', name: 'Pisco' });
// 12 - Junin
provinces.set('1201', { code: '1201', name: 'Huancayo' });
provinces.set('1202', { code: '1202', name: 'Concepcion' });
provinces.set('1203', { code: '1203', name: 'Chanchamayo' });
provinces.set('1204', { code: '1204', name: 'Jauja' });
provinces.set('1205', { code: '1205', name: 'Junin' });
provinces.set('1206', { code: '1206', name: 'Satipo' });
provinces.set('1207', { code: '1207', name: 'Tarma' });
provinces.set('1208', { code: '1208', name: 'Yauli' });
provinces.set('1209', { code: '1209', name: 'Chupaca' });
// 13 - La Libertad
provinces.set('1301', { code: '1301', name: 'Trujillo' });
provinces.set('1302', { code: '1302', name: 'Ascope' });
provinces.set('1303', { code: '1303', name: 'Bolivar' });
provinces.set('1304', { code: '1304', name: 'Chepen' });
provinces.set('1305', { code: '1305', name: 'Julcan' });
provinces.set('1306', { code: '1306', name: 'Otuzco' });
provinces.set('1307', { code: '1307', name: 'Pacasmayo' });
provinces.set('1308', { code: '1308', name: 'Pataz' });
provinces.set('1309', { code: '1309', name: 'Sanchez Carrion' });
provinces.set('1310', { code: '1310', name: 'Santiago de Chuco' });
provinces.set('1311', { code: '1311', name: 'Gran Chimu' });
provinces.set('1312', { code: '1312', name: 'Viru' });
// 14 - Lambayeque
provinces.set('1401', { code: '1401', name: 'Chiclayo' });
provinces.set('1402', { code: '1402', name: 'Ferreñafe' });
provinces.set('1403', { code: '1403', name: 'Lambayeque' });
// 15 - Lima
provinces.set('1501', { code: '1501', name: 'Lima' });
provinces.set('1502', { code: '1502', name: 'Barranca' });
provinces.set('1503', { code: '1503', name: 'Cajatambo' });
provinces.set('1504', { code: '1504', name: 'Canta' });
provinces.set('1505', { code: '1505', name: 'Cañete' });
provinces.set('1506', { code: '1506', name: 'Huaral' });
provinces.set('1507', { code: '1507', name: 'Huarochiri' });
provinces.set('1508', { code: '1508', name: 'Huaura' });
provinces.set('1509', { code: '1509', name: 'Oyon' });
provinces.set('1510', { code: '1510', name: 'Yauyos' });
// 16 - Loreto
provinces.set('1601', { code: '1601', name: 'Maynas' });
provinces.set('1602', { code: '1602', name: 'Alto Amazonas' });
provinces.set('1603', { code: '1603', name: 'Loreto' });
provinces.set('1604', { code: '1604', name: 'Mariscal Ramon Castilla' });
provinces.set('1605', { code: '1605', name: 'Requena' });
provinces.set('1606', { code: '1606', name: 'Ucayali' });
provinces.set('1607', { code: '1607', name: 'Datem del Marañon' });
provinces.set('1608', { code: '1608', name: 'Putumayo' });
// 17 - Madre de Dios{code:  de Di, name:
provinces.set('1701', { code: '1701', name: 'Tambopata' });
provinces.set('1702', { code: '1702', name: 'Manu' });
provinces.set('1703', { code: '1703', name: 'Tahuamanu' });
// 18 - Moquegua
provinces.set('1801', { code: '1801', name: 'Mariscal Nieto' });
provinces.set('1802', { code: '1802', name: 'General Sanchez Cerro' });
provinces.set('1803', { code: '1803', name: 'Ilo' });
// 19 - Pasco
provinces.set('1901', { code: '1901', name: 'Pasco' });
provinces.set('1902', { code: '1902', name: 'Daniel Alcides Carrion' });
provinces.set('1903', { code: '1903', name: 'Oxapampa' });
// 20 - Piura
provinces.set('2001', { code: '2001', name: 'Piura' });
provinces.set('2002', { code: '2002', name: 'Ayabaca' });
provinces.set('2003', { code: '2003', name: 'Huancabamba' });
provinces.set('2004', { code: '2004', name: 'Morropon' });
provinces.set('2005', { code: '2005', name: 'Paita' });
provinces.set('2006', { code: '2006', name: 'Sullana' });
provinces.set('2007', { code: '2007', name: 'Talara' });
provinces.set('2008', { code: '2008', name: 'Sechura' });
// 21 - Puno
provinces.set('2101', { code: '2101', name: 'Puno' });
provinces.set('2102', { code: '2102', name: 'Azangaro' });
provinces.set('2103', { code: '2103', name: 'Carabaya' });
provinces.set('2104', { code: '2104', name: 'Chucuito' });
provinces.set('2105', { code: '2105', name: 'El Collao' });
provinces.set('2106', { code: '2106', name: 'Huancane' });
provinces.set('2107', { code: '2107', name: 'Lampa' });
provinces.set('2108', { code: '2108', name: 'Melgar' });
provinces.set('2109', { code: '2109', name: 'Moho' });
provinces.set('2110', { code: '2110', name: 'San Antonio de Putina' });
provinces.set('2111', { code: '2111', name: 'San Roman' });
provinces.set('2112', { code: '2112', name: 'Sandia' });
provinces.set('2113', { code: '2113', name: 'Yunguyo' });
// 22 - San Martin
provinces.set('2201', { code: '2201', name: 'Moyobamba' });
provinces.set('2202', { code: '2202', name: 'Bellavista' });
provinces.set('2203', { code: '2203', name: 'El Dorado' });
provinces.set('2204', { code: '2204', name: 'Huallaga' });
provinces.set('2205', { code: '2205', name: 'Lamas' });
provinces.set('2206', { code: '2206', name: 'Mariscal Caceres' });
provinces.set('2207', { code: '2207', name: 'Picota' });
provinces.set('2208', { code: '2208', name: 'Rioja' });
provinces.set('2209', { code: '2209', name: 'San Martin' });
provinces.set('2210', { code: '2210', name: 'Tocache' });
// 23 - Tacna
provinces.set('2301', { code: '2301', name: 'Tacna' });
provinces.set('2302', { code: '2302', name: 'Candarave' });
provinces.set('2303', { code: '2303', name: 'Jorge Basadre' });
provinces.set('2304', { code: '2304', name: 'Tarata' });
// 24 - Tumbes
provinces.set('2401', { code: '2401', name: 'Tumbes' });
provinces.set('2402', { code: '2402', name: 'Contralmirante Villar' });
provinces.set('2403', { code: '2403', name: 'Zarumilla' });
// 25 - Ucayali
provinces.set('2501', { code: '2501', name: 'Coronel Portillo' });
provinces.set('2502', { code: '2502', name: 'Atalaya' });
provinces.set('2503', { code: '2503', name: 'Padre Abad' });
provinces.set('2504', { code: '2504', name: 'Purus' });

export { provinces };
