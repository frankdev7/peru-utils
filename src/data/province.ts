import { IUbigeo } from '../types';

const province: Map<string, IUbigeo> = new Map();
// 01 - Amazonas
province.set('0101', { code: '0101', name: 'Chachapoyas' });
province.set('0102', { code: '0102', name: 'Bagua' });
province.set('0103', { code: '0103', name: 'Bongará' });
province.set('0104', { code: '0104', name: 'Condorcanqui' });
province.set('0105', { code: '0105', name: 'Luya' });
province.set('0106', { code: '0106', name: 'Rodríguez de Mendoza' });
province.set('0107', { code: '0107', name: 'Utcubamba' });
// 02 - 'Áncash'
province.set('0201', { code: '0201', name: 'Huaraz' });
province.set('0202', { code: '0202', name: 'Aija' });
province.set('0203', { code: '0203', name: 'Antonio Raymondi' });
province.set('0204', { code: '0204', name: 'Asunción' });
province.set('0205', { code: '0205', name: 'Bolognesi' });
province.set('0206', { code: '0206', name: 'Carhuaz' });
province.set('0207', { code: '0207', name: 'Carlos Fermín Fitzcarrald' });
province.set('0208', { code: '0208', name: 'Casma' });
province.set('0209', { code: '0209', name: 'Corongo' });
province.set('0210', { code: '0210', name: 'Huari' });
province.set('0211', { code: '0211', name: 'Huarmey' });
province.set('0212', { code: '0212', name: 'Huaylas' });
province.set('0213', { code: '0213', name: 'Mariscal Luzuriaga' });
province.set('0214', { code: '0214', name: 'Ocros' });
province.set('0215', { code: '0215', name: 'Pallasca' });
province.set('0216', { code: '0216', name: 'Pomabamba' });
province.set('0217', { code: '0217', name: 'Recuay' });
province.set('0218', { code: '0218', name: 'Santa' });
province.set('0219', { code: '0219', name: 'Sihuas' });
province.set('0220', { code: '0220', name: 'Yungay' });
// 03 - Apurímac
province.set('0301', { code: '0301', name: 'Abancay' });
province.set('0302', { code: '0302', name: 'Andahuaylas' });
province.set('0303', { code: '0303', name: 'Antabamba' });
province.set('0304', { code: '0304', name: 'Aymaraes' });
province.set('0305', { code: '0305', name: 'Cotabambas' });
province.set('0306', { code: '0306', name: 'Chincheros' });
province.set('0307', { code: '0307', name: 'Grau' });
// 04 - Arequipa
province.set('0401', { code: '0401', name: 'Arequipa' });
province.set('0402', { code: '0402', name: 'Camaná' });
province.set('0403', { code: '0403', name: 'Caravelí' });
province.set('0404', { code: '0404', name: 'Castilla' });
province.set('0405', { code: '0405', name: 'Caylloma' });
province.set('0406', { code: '0406', name: 'Condesuyos' });
province.set('0407', { code: '0407', name: 'Islay' });
province.set('0408', { code: '0408', name: 'La Unión' });
// 05 - Ayacucho
province.set('0501', { code: '0501', name: 'Huamanga' });
province.set('0502', { code: '0502', name: 'Cangallo' });
province.set('0503', { code: '0503', name: 'Huanca Sancos' });
province.set('0504', { code: '0504', name: 'Huanta' });
province.set('0505', { code: '0505', name: 'La Mar' });
province.set('0506', { code: '0506', name: 'Lucanas' });
province.set('0507', { code: '0507', name: 'Parinacochas' });
province.set('0508', { code: '0508', name: 'Pàucar del Sara Sara' });
province.set('0509', { code: '0509', name: 'Sucre' });
province.set('0510', { code: '0510', name: 'Víctor Fajardo' });
province.set('0511', { code: '0511', name: 'Vilcas Huamán' });
// 06 - Cajamarca
province.set('0601', { code: '0601', name: 'Cajamarca' });
province.set('0602', { code: '0602', name: 'Cajabamba' });
province.set('0603', { code: '0603', name: 'Celendín' });
province.set('0604', { code: '0604', name: 'Chota' });
province.set('0605', { code: '0605', name: 'Contumazá' });
province.set('0606', { code: '0606', name: 'Cutervo' });
province.set('0607', { code: '0607', name: 'Hualgayoc' });
province.set('0608', { code: '0608', name: 'Jaén' });
province.set('0609', { code: '0609', name: 'San Ignacio' });
province.set('0610', { code: '0610', name: 'San Marcos' });
province.set('0611', { code: '0611', name: 'San Miguel' });
province.set('0612', { code: '0612', name: 'San Pablo' });
province.set('0613', { code: '0613', name: 'Santa Cruz' });
// 07 - Callao
province.set('0701', { code: '0701', name: 'Prov. Const. del Callao' });
// 08 - Cusco
province.set('0801', { code: '0801', name: 'Cusco' });
province.set('0802', { code: '0802', name: 'Acomayo' });
province.set('0803', { code: '0803', name: 'Anta' });
province.set('0804', { code: '0804', name: 'Calca' });
province.set('0805', { code: '0805', name: 'Canas' });
province.set('0806', { code: '0806', name: 'Canchis' });
province.set('0807', { code: '0807', name: 'Chumbivilcas' });
province.set('0808', { code: '0808', name: 'Espinar' });
province.set('0809', { code: '0809', name: 'La Convención' });
province.set('0810', { code: '0810', name: 'Paruro' });
province.set('0811', { code: '0811', name: 'Paucartambo' });
province.set('0812', { code: '0812', name: 'Quispicanchi' });
province.set('0813', { code: '0813', name: 'Urubamba' });
// 09 - Huancavelica
province.set('0901', { code: '0901', name: 'Huancavelica' });
province.set('0902', { code: '0902', name: 'Acobamba' });
province.set('0903', { code: '0903', name: 'Angaraes' });
province.set('0904', { code: '0904', name: 'Castrovirreyna' });
province.set('0905', { code: '0905', name: 'Churcampa' });
province.set('0906', { code: '0906', name: 'Huaytará' });
province.set('0907', { code: '0907', name: 'Tayacaja' });
// 10 - Huánuco
province.set('1001', { code: '1001', name: 'Huánuco' });
province.set('1002', { code: '1002', name: 'Ambo' });
province.set('1003', { code: '1003', name: 'Dos de Mayo' });
province.set('1004', { code: '1004', name: 'Huacaybamba' });
province.set('1005', { code: '1005', name: 'Huamalíes' });
province.set('1006', { code: '1006', name: 'Leoncio Prado' });
province.set('1007', { code: '1007', name: 'Marañón' });
province.set('1008', { code: '1008', name: 'Pachitea' });
province.set('1009', { code: '1009', name: 'Puerto Inca' });
province.set('1010', { code: '1010', name: 'Lauricocha' });
province.set('1011', { code: '1011', name: 'Yarowilca' });
// 11 - Ica
province.set('1101', { code: '1101', name: 'Ica' });
province.set('1102', { code: '1102', name: 'Chincha' });
province.set('1103', { code: '1103', name: 'Nasca' });
province.set('1104', { code: '1104', name: 'Palpa' });
province.set('1105', { code: '1105', name: 'Pisco' });
// 12 - Junín
province.set('1201', { code: '1201', name: 'Huancayo' });
province.set('1202', { code: '1202', name: 'Concepción' });
province.set('1203', { code: '1203', name: 'Chanchamayo' });
province.set('1204', { code: '1204', name: 'Jauja' });
province.set('1205', { code: '1205', name: 'Junín' });
province.set('1206', { code: '1206', name: 'Satipo' });
province.set('1207', { code: '1207', name: 'Tarma' });
province.set('1208', { code: '1208', name: 'Yauli' });
province.set('1209', { code: '1209', name: 'Chupaca' });
// 13 - La Libertad
province.set('1301', { code: '1301', name: 'Trujillo' });
province.set('1302', { code: '1302', name: 'Ascope' });
province.set('1303', { code: '1303', name: 'Bolívar' });
province.set('1304', { code: '1304', name: 'Chepén' });
province.set('1305', { code: '1305', name: 'Julcán' });
province.set('1306', { code: '1306', name: 'Otuzco' });
province.set('1307', { code: '1307', name: 'Pacasmayo' });
province.set('1308', { code: '1308', name: 'Pataz' });
province.set('1309', { code: '1309', name: 'Sánchez Carrión' });
province.set('1310', { code: '1310', name: 'Santiago de Chuco' });
province.set('1311', { code: '1311', name: 'Gran Chimú' });
province.set('1312', { code: '1312', name: 'Virú' });
// 14 - Lambayeque
province.set('1401', { code: '1401', name: 'Chiclayo' });
province.set('1402', { code: '1402', name: 'Ferreñafe' });
province.set('1403', { code: '1403', name: 'Lambayeque' });
// 15 - Lima
province.set('1501', { code: '1501', name: 'Lima' });
province.set('1502', { code: '1502', name: 'Barranca' });
province.set('1503', { code: '1503', name: 'Cajatambo' });
province.set('1504', { code: '1504', name: 'Canta' });
province.set('1505', { code: '1505', name: 'Cañete' });
province.set('1506', { code: '1506', name: 'Huaral' });
province.set('1507', { code: '1507', name: 'Huarochirí' });
province.set('1508', { code: '1508', name: 'Huaura' });
province.set('1509', { code: '1509', name: 'Oyón' });
province.set('1510', { code: '1510', name: 'Yauyos' });
// 16 - Loreto
province.set('1601', { code: '1601', name: 'Maynas' });
province.set('1602', { code: '1602', name: 'Alto Amazonas' });
province.set('1603', { code: '1603', name: 'Loreto' });
province.set('1604', { code: '1604', name: 'Mariscal Ramón Castilla' });
province.set('1605', { code: '1605', name: 'Requena' });
province.set('1606', { code: '1606', name: 'Ucayali' });
province.set('1607', { code: '1607', name: 'Datem del Marañón' });
province.set('1608', { code: '1608', name: 'Putumayo' });
// 17 - Madre de Dios{code:  de Di, name:
province.set('1701', { code: '1701', name: 'Tambopata' });
province.set('1702', { code: '1702', name: 'Manu' });
province.set('1703', { code: '1703', name: 'Tahuamanu' });
// 18 - Moquegua
province.set('1801', { code: '1801', name: 'Mariscal Nieto' });
province.set('1802', { code: '1802', name: 'General Sánchez Cerro' });
province.set('1803', { code: '1803', name: 'Ilo' });
// 19 - Pasco
province.set('1901', { code: '1901', name: 'Pasco' });
province.set('1902', { code: '1902', name: 'Daniel Alcides Carrión' });
province.set('1903', { code: '1903', name: 'Oxapampa' });
// 20 - Piura
province.set('2001', { code: '2001', name: 'Piura' });
province.set('2002', { code: '2002', name: 'Ayabaca' });
province.set('2003', { code: '2003', name: 'Huancabamba' });
province.set('2004', { code: '2004', name: 'Morropón' });
province.set('2005', { code: '2005', name: 'Paita' });
province.set('2006', { code: '2006', name: 'Sullana' });
province.set('2007', { code: '2007', name: 'Talara' });
province.set('2008', { code: '2008', name: 'Sechura' });
// 21 - Puno
province.set('2101', { code: '2101', name: 'Puno' });
province.set('2102', { code: '2102', name: 'Azángaro' });
province.set('2103', { code: '2103', name: 'Carabaya' });
province.set('2104', { code: '2104', name: 'Chucuito' });
province.set('2105', { code: '2105', name: 'El Collao' });
province.set('2106', { code: '2106', name: 'Huancané' });
province.set('2107', { code: '2107', name: 'Lampa' });
province.set('2108', { code: '2108', name: 'Melgar' });
province.set('2109', { code: '2109', name: 'Moho' });
province.set('2110', { code: '2110', name: 'San Antonio de Putina' });
province.set('2111', { code: '2111', name: 'San Román' });
province.set('2112', { code: '2112', name: 'Sandia' });
province.set('2113', { code: '2113', name: 'Yunguyo' });
// 22 - San Martín
province.set('2201', { code: '2201', name: 'Moyobamba' });
province.set('2202', { code: '2202', name: 'Bellavista' });
province.set('2203', { code: '2203', name: 'El Dorado' });
province.set('2204', { code: '2204', name: 'Huallaga' });
province.set('2205', { code: '2205', name: 'Lamas' });
province.set('2206', { code: '2206', name: 'Mariscal Cáceres' });
province.set('2207', { code: '2207', name: 'Picota' });
province.set('2208', { code: '2208', name: 'Rioja' });
province.set('2209', { code: '2209', name: 'San Martín' });
province.set('2210', { code: '2210', name: 'Tocache' });
// 23 - Tacna
province.set('2301', { code: '2301', name: 'Tacna' });
province.set('2302', { code: '2302', name: 'Candarave' });
province.set('2303', { code: '2303', name: 'Jorge Basadre' });
province.set('2304', { code: '2304', name: 'Tarata' });
// 24 - Tumbes
province.set('2401', { code: '2401', name: 'Tumbes' });
province.set('2402', { code: '2402', name: 'Contralmirante Villar' });
province.set('2403', { code: '2403', name: 'Zarumilla' });
// 25 - Ucayali
province.set('2501', { code: '2501', name: 'Coronel Portillo' });
province.set('2502', { code: '2502', name: 'Atalaya' });
province.set('2503', { code: '2503', name: 'Padre Abad' });
province.set('2504', { code: '2504', name: 'Purús' });

export { province };
