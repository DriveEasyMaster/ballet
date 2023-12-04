jQuery(document).ready(function() {

    //*********************Колекции*******************/
    const content_txt_arr = new Map([//Коллекция с текстом для content
        ['ROH', "The Royal Ballet is a British internationally renowned classical ballet company, based at the Royal Opera House in Covent Garden, London, England. The largest of the five major ballet companies in Great Britain, the Royal Ballet was founded in 1931 by Dame Ninette de Valois. It became the resident ballet company of the Royal Opera House in 1946, and has purpose-built facilities within these premises. It was granted a royal charter in 1956, becoming recognised as Britain's flagship ballet company. The Royal Ballet was one of the foremost ballet companies of the 20th century, and continues to be one of the world's most famous ballet companies to this day, generally noted for its artistic and creative values."],
        ['PARIS', "The Paris Opera Ballet (Ballet de l'Opéra national de Paris) is a French ballet company that is an integral part of the Paris Opera. It is the oldest national ballet company, and many European and international ballet companies can trace their origins to it. The ballet company consists of 154 dancers, among them 17 Danseurs Étoiles. The principal dancers give 180 dance performances each year, primarily at the Palais Garnier. Just as prestigious as the Paris Opera Ballet is its dance school, the Paris Opera Ballet School (École de danse de l'Opéra national de Paris), considered to be one of the world's best dance schools. Its former pupils have won a record of 20 Benois de la Danse awards. The school celebrated its tercentennial in 2013."],
        ['New_York_City', "New York City Ballet (NYCB) is a ballet company founded in 1948 by choreographer George Balanchine and Lincoln Kirstein. City Ballet grew out of earlier troupes: the Producing Company of the School of American Ballet, 1934; the American Ballet, 1935, and Ballet Caravan, 1936, which merged into American Ballet Caravan. The company was named New York City Ballet in 1948 when it became resident at City Center of Music and Drama.  The School of American Ballet (S.A.B.), which Balanchine founded, is the training school of the company. NYCB  the largest repertoire by far of any American ballet company. It often stages 60 ballets or more in its winter and spring seasons at Lincoln Center each year, and 20 or more in its summer season in Saratoga Springs."],
        ['ABT', "American Ballet Theatre (ABT) is a classical ballet company based in New York City. Founded in 1939 by Lucia Chase and Richard Pleasant, it is recognized as one of the world's leading classical ballet companies. ABT is perform seasons at the Metropolitan Opera House (Lincoln Center) in the spring and a shorter season at the David H. Koch Theater in the fall; the company tours around the world the rest of the year. ABT is the parent company of the American Ballet Theatre Jacqueline Kennedy Onassis School, and was recognized as \"America's National Ballet Company\" in 2006 by the United States Congress."],
        ['Wiener', "Vienna State Ballet, Wiener Staatsballett, is considered one of the world's top ballet companies. It was formerly named the Vienna State Opera Ballet as it is based at the Vienna State Opera building. In 2005 the ballets of the Vienna State Opera and the Vienna Volksoper were merged under the name Das Ballett der Wiener Staatsoper und Volksoper and Gyula Harangozo became the artistic director. On 1 September 2010, a further name change was accompanied by a change in leadership. Manuel Legris, former principal dancer with the Paris Opera Ballet, succeeded as the artistic director."]
    ]);

    const youtube_home_arr = new Map([//Коллекция с инициализацией значений ссылок на Youtube Home
        ['ROH', 'https://www.youtube.com/@RoyalOperaHouse'],
        ['PARIS', 'https://www.youtube.com/@operadeparis'],
        ['New_York_City', 'https://www.youtube.com/@nycballet'],
        ['ABT', 'https://www.youtube.com/@AmericanBalletTheatre'],
        ['Wiener', 'https://www.youtube.com/@WienerStaatsoperWeb']
    ]);

    const URL_arr = new Map([//Коллекция с инициализацией значений ссылок
        ['ROH', 'https://www.roh.org.uk/'],
        ['PARIS', 'https://www.operadeparis.fr/'],
        ['New_York_City', 'https://www.nycballet.com/'],
        ['ABT', 'https://www.abt.org/'],
        ['Wiener', 'https://www.wiener-staatsoper.at/']
    ]);


    //*******************************************************************/



    //********************Youtube pleer*********************************/    
    const youtube_arr = new Map([//Коллекция с инициализацией начальных значений ссылок на Youtube
        ['ROH', 'eqNJkorD2Yw'],
        ['PARIS', 'tmZXDlyFolY'],
        ['New_York_City', 'wFXPdRZ33Jg'],
        ['ABT', '30w79_xMgkg'],
        ['Wiener', '2uxsSB3NwRY']
        ]);
        
    let prefix = '<iframe id="ytplayer" ';
    let type = 'type="text/html" ';
    let width = 'width="480" ';
    let height = 'height="270" ';
    let src_prefix = 'src="https://www.youtube.com/embed/';    
    let src_sufix = '?autoplay=1&modestbranding=1&color=white" ';
    let sufix = 'frameborder="0" allowfullscreen>';

    function fun_youtube(src) {
        let url_youtube = prefix + type + width + height + src_prefix + src + src_sufix + sufix;
        return url_youtube;
        }
    //**************************************************************/  
 


//*********************Фон боди*********************************/
    let ImageNamber_L = 1;
    let ImageNamber = 1;
    let ImageNamber_R = 1;        
    jQuery('.body_2').fadeTo(12000,0);
        timer = setInterval(function() {
            jQuery('.body_2').fadeTo(2000,1);
            jQuery('.body_2').fadeTo(8000,1); 
            ImageNamber++;
            ImageNamber_L = Math.floor(Math.random() * 20)+1;
            ImageNamber_R = Math.floor(Math.random() * 20)+1;
            if(ImageNamber > 21)
            {
            ImageNamber = 1;
            } 
            jQuery('.body_2').fadeTo(2000,0);         
            jQuery('.body_2').css('background-image', 'url(css/img/background/' + ImageNamber_L + '.jpg)');
            //jQuery('.inner-sidebar-1').css('background-image', 'url(../css/img/background_2/' + ImageNamber_L + '.jpg)');
            //jQuery('.inner-sidebar-2').css('background-image', 'url(../css/img/background_2/' + ImageNamber_R + '.jpg)');
            }, 
         12000);
//*************************************************************/


    let Teg_id, Teg_href, Teg_txt, conten_text, youtube_home, URL, Teg_www_2_id, youtube;
//*****************Следим за наведением мыши в .www*******************/  
    jQuery('.www').mouseover(function() {   //Событие mouseover() происходит при попадании курсора в границы элемента. Событие mouseout() происходит при выходе курсора за пределы области элемента.            
        jQuery('.youtube-inner-content').html('');

    });

    jQuery('.www').mouseout(function() {   //Событие mouseout() происходит при выходе курсора за пределы области элемента.            
        Teg_id = 0;
        Teg_href = 0; 
        console.log(Teg_id + '  ' + Teg_href + '  ' + Teg_txt);
    }); 
//**********************************************************/


//*****************Следим за кликом мыши в .www*******************/  
jQuery('.www').click(function() {    //Событие mouseover() происходит при попадании курсора в границы элемента. Событие mouseout() происходит при выходе курсора за пределы области элемента.            
    Teg_id = jQuery(this).attr('id');
    Teg_href = jQuery(this).attr("href");//вернет ссылку (href) тега 
    Teg_txt = jQuery(this).text();//вернет текст тега
    conten_text = content_txt_arr.get(Teg_id);
    youtube_home = youtube_home_arr.get(Teg_id);
    URL = URL_arr.get(Teg_id); 

    jQuery('.background-inner-content').css('background-image', 'url(css/img/content/' + Teg_id + '.jpg)');//Обои Контент    
    jQuery('#www-inner-content').html(Teg_txt);//Название блока контента, текст
    jQuery('#www-inner-content').attr('href', URL);//Ссылка на сайт. Запись новой ссылки или замена старой
    jQuery('#www-youtube-inner-content').css('background-image', 'url(css/img/ico/youtube.png)');//иконка кнопки youtube
    jQuery('.text-inner-content').html(conten_text);//текст контента
    jQuery('#www-youtube-inner-content').attr('href', youtube_home);//Запись новой ссылки или замена старой
  
    console.log(Teg_id);
});
jQuery('.www').mouseout(function() {   //Событие mouseout() происходит при выходе курсора за пределы области элемента.            
    Teg_id = 0;
    Teg_href = 0; 
    console.log(Teg_id + '  ' + Teg_href + '  ' + Teg_txt);
}); 
//**********************************************************/


//*****************Следим за кликом мыши в www_2********************/
    jQuery('.www_2').click(function() { 
        Teg_www_2_id = jQuery(this).attr('id');
        Teg_txt = jQuery(this).text();//вернет текст тега

        y_url = youtube_arr.get(Teg_www_2_id);//Получить значение по ключу выполняется с помощью метода get
        youtube = fun_youtube(y_url);//Обращаемся к нашей функции fun_youtube с короткой ссылкой типа ('eqNJkorD2Yw') в ответ получае полный код плеера

        jQuery('.youtube-inner-content').fadeTo(500,0.3);
        jQuery('.youtube-inner-content').html(youtube);
        jQuery('.youtube-inner-content').fadeTo(2000,1);
        
        console.log(Teg_txt);
        console.log(Teg_www_2_id);
        console.log(youtube);     
        

    });
//**************************************************************/ 





});


