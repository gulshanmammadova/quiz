let tests = [
    {
        topicName: 'Dövri qanun və dövri sistem',
        level: 'Asan',
        topicId: 'M1',
        levelId: 'A',
        question: 'Elektron formulu ...3d⁵4s² olan element dövri sistemin hansi dövr və hansı qrupunda yerləşir?',
        answer: 'IV dövr,VII qrupun əlavə yarımqrupunda ',
        allAnswer: ['IV dövr,VII qrupun əsas yarımqrupunda ', 'IV dövr,II qrupun əlavə yarımqrupunda ', 'IV dövr,VII qrupun əlavə yarımqrupunda ', 'IV dövr,V qrupun əlavə yarımqrupunda ', 'III dövr,VII qrupun əlavə yarımqrupunda ']
    },
    
    {
        topicName: 'Dövri qanun və dövri sistem',
        level: 'Orta',
        topicId: 'M1',
        levelId: 'B',
        question: 'Hansı elektron formulu atomun həyəcanlanmış halına uyğundur?',
        answer: '...2s¹2p¹',
        allAnswer: ['...2s¹2p¹', '...2s²2p³', '...3d⁵4s²', '...2s²', '...3s²3p²']
    },
   
    {
        topicName: 'Dövri qanun və dövri sistem',
        level: 'Çətin',
        topicId: 'M1',
        levelId: 'C',
        question: 'X<span style="margin-top: 19px;font-size: 12px;">2</span>O-molekulunda 46 elektron varsa X atomunda proton sayını müəyyən edin:',
        answer: 19,
        allAnswer: [20,38,19,18,21]
    },
    {
        topicName: 'Oksid,Əsas,Turşu,Duz',
        level: 'Asan',
        topicId: 'M2',
        levelId: 'A',
        question: 'Duz əmələ  <strong>gətirməyən</strong> oksidləri göstərin.',
        answer: ' N<sub>2</sub>O,NO,CO',
        allAnswer: ['NO,NO<sub>2</sub>,SO<sub>2</sub>', ' CO,N<sub>2</sub>O,CO<sub>2</sub>', ' N<sub>2</sub>O,NO,CO', 'K<sub>2</sub>O,CO,NO<sub>2</sub>', 'CO,NO,SO<sub>3</sub>,CO,NO<sub>2</sub>']
    },
    {
        topicName: 'Oksid,Əsas,Turşu,Duz',
        level: 'Orta',
        topicId: 'M2',
        levelId: 'B',
        question: '<table border style="text-align:center;align-items:center;font-size:18px;"><thead><tr style="padding:10px;"><th>Duzun tipi</th><th>Molekulda atom sayı</th><th>Duzun formulu</th></tr></thead><tbody><tr><td>Normal duz</td><td>6</td><td>X</td></tr></tbody></table>',
        answer: 'NH<sub>4</sub>Br',
        allAnswer: ['Fe(OH)<sub>2</sub>Cl', ' KHSO<sub>4</sub>', 'NaKCO<sub>3</sub>', 'K<sub>2</sub>SO<sub>4</sub>', 'NH<sub>4</sub>Br']
    },
    {
        topicName: 'Oksid,Əsas,Turşu,Duz',
        level: 'Çətin',
        topicId: 'M2',
        levelId: 'C',
        question: '<p>Y maddəsini müəyyən edin:</p>Na<span style="margin-top: 19px;font-size: 12px;">2</span>O&#43;H<span style="margin-top: 19px;font-size: 12px;">2</span>O&rarr;X&#43;HCl&rarr;Y&#43;H<span style="margin-top: 19px;font-size: 12px;">2</span>O',
        answer: 'duz',
        allAnswer: ['duz', 'qələvi', 'oksid', 'turşu', 'xlor']
    },
 
    {
        topicName: 'Kimyəvi Rabitə',
        level: 'Asan',
        topicId: 'M3',
        levelId: 'A',
        question: 'Yalnız qeyri-polyar kovalent rabitəli maddələr',
        answer: ' H<sub>2</sub>,O<sub>2</sub>,Br<sub>2</sub>,F<sub>2</sub>',
        allAnswer: [' H<sub>2</sub>,O<sub>2</sub>,Br<sub>2</sub>,F<sub>2</sub>','H<sub>2</sub>O,H<sub>2</sub>O<sub>2</sub>,C<sub>2</sub>H<sub>4</sub>,O<sub>3</sub>','O<sub>2</sub>,Cl<sub>2</sub>,Na,H<sub>2</sub>','HCl,H<sub>2</sub>O,CO,NO','H<sub>2</sub>,CO<sub>2</sub>,CO,I<sub>2</sub>']
    },
    {
        topicName: 'Kimyəvi Rabitə',
        level: 'Orta',
        topicId: 'M3',
        levelId: 'B',
        question: '<table border style="text-align:center;align-items:center;font-size:18px;"><thead><tr style="padding:10px;"><th>Maddələr</th><th>Əmələ gətirdiyi kristal qəfəsin tipi</th></tr></thead><tbody><tr><td>S<sub>8</sub></td><td>X</td></tr><tr><td>KCl</td><td>Y</td></tr><tr><td>SiC</td><td>Z</td></tr></tbody></table><br>X,Y,Z-i müəyyən edin',
        answer: 'molekulyar,ion,atom',
        allAnswer: ['atom,molekulyar,ion','ion,atom,molekulyar','atom,ion,molekulyar','ion,malekulyar,atom','molekulyar,ion,atom']
    },
    {
        topicName: 'Kimyəvi Rabitə',
        level: 'Çətin',
        topicId: 'M3',
        levelId: 'C',
        question: '<p>2 mol Na<span style="margin-top: 19px;font-size: 12px;">2</span>SO<span style="margin-top: 19px;font-size: 12px;">4</span> olan ion rabitələrin sayını müəyyən edin:</p>',
        answer: 4,
        allAnswer: [2,6,4,8,16]
    },
    {
        topicName: 'Kimyəvi Reaksiya',
        level: 'Asan',
        topicId: 'M4',
        levelId: 'A',
        question: 'Fe+CuSO<span style="margin-top: 19px;font-size: 12px;">4</span>&rarr; Reaksiyanın tipini müəyyən edin:',
        answer: 'əvəzetmə',
        allAnswer: ['parçalanma','əvəzetmə','birləşmə','dəyişmə','polimerləşmə']
    },
    {
        topicName: 'Kimyəvi Reaksiya',
        level: 'Orta',
        topicId: 'M4',
        levelId: 'B',
        question: 'Homogen reaksiyanı göstərin:',
        answer: 'N<sub>2</sub>&plus;O<sub>2</sub>&rarr;',
        allAnswer: ['N<sub>2</sub>&plus;O<sub>2</sub>&rarr;','C&plus;O<sub>2</sub>&rarr;','Zn&plus;HCl&rarr;','Fe&plus;O<sub>2</sub>&rarr;','H<sub>2</sub>&plus;CuO&rarr;']
    },
    {
        topicName: 'Kimyəvi Reaksiya',
        level: 'Çətin',
        topicId: 'M4',
        levelId: 'C',
        question: 'NH<span style="margin-top: 19px;font-size: 12px;">3</span>&plus;HCl&rarr; Reaksiyanın tipini müəyyən edin:',
        answer: 'birləşmə',
        allAnswer: ['parçalanma','əvəzetmə','birləşmə','dəyişmə','polimerləşmə']
    },
    {
        topicName: 'Valentlik,Oksidləşmə dərəcəsi',
        level: 'Asan',
        topicId: 'M5',
        levelId: 'A',
        question: 'Florun ən böyük və ən kiçik oksidləşmə dərəcəsini göstərin:',
        answer: '-1 və 0',
        allAnswer: ['-1 və +3','0 və +7','0 və +5','0 və +7','-1 və 0']
    },
    {
        topicName: 'Valentlik,Oksidləşmə dərəcəsi',
        level: 'Orta',
        topicId: 'M5',
        levelId: 'B',
        question: 'Qeyri-metalllara aid olan X elementinin atomunun birləşmələrdə ən böyük oksidləşmə dərəcəsi +6-dır.Bu elementin ən böyük və ən kiçik oksidləşmə dərəcələrinin cəmini müəyyən edin:',
        answer: 4,
        allAnswer: [8,3,2,4,6]
    },
    {
        topicName: 'Valentlik,Oksidləşmə dərəcəsi',
        level: 'Çətin',
        topicId: 'M5',
        levelId: 'C',
        question: 'K<span style="margin-top: 19px;font-size: 12px;">2</span>Cr<span style="margin-top: 19px;font-size: 12px;">2</span>O<span style="margin-top: 19px;font-size: 12px;">7</span> birləşməsində xromun  oksidləşmə dərcəsi  neçədir?',
        answer: '+6',
        allAnswer: ['+6','+4','+2','+5','+3']
    }
];
export default tests;