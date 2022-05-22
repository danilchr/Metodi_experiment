PennController.ResetPrefix(null); // Shorten command names (keep this line here)

//var number_of_experiment=2
var number_of_experiment='_Metodi'

var number_of_experiment_as_string=number_of_experiment.toString()

var experiment_label_indef="експеримент по лингвистика"

var experiment_label_def="експериментот по лингвистика"


var experiment_label1= experiment_label_indef

var experiment_label2=experiment_label_indef


experiment_label2.charAt(0).toUpperCase() + experiment_label2.slice(1)

experiment_path="https://ibexfarm.ung.si/uporabniki/dk0035/experiment"+number_of_experiment_as_string+'/';
//experiment_path="https://ibexfarm.ung.si/uporabniki/dk0035/Metodi_experiment"

stimuli_path=experiment_path+'stimuli/';
zip_folder_path=stimuli_path+'zip_folder/';
zip_file_path=zip_folder_path+'zipped_stimuli_mono.zip'
    
//var type_of_experiment ="test-short";
var type_of_experiment ="test-full";
    
//var type_of_experiment ="pilot";
//var type_of_experiment ="main";



var progressBarText = "прогрес";
var stimuli_csv_table="design_final.csv";
//Template("test_csv"
var message_for_the_type_of_experiment = "";

var Question_asked = "Ве замолуваме оценете ја реченицата од 1 (апсолутно неприфатлива) до 7 (апсолутно прифатлива).";

var screen_width;

var device_name;

var mobile_device_based_on_screen_width;

var mobile_device_based_on_device_name;


if (type_of_experiment=="pilot")
{
  message_for_the_type_of_experiment = "Пилот проект на "+experiment_label1;
  stimuli_csv_table="design_final.csv";
  results_path=experiment_path+'pilot/';

}
else if (type_of_experiment=="test-short")
{
  message_for_the_type_of_experiment = "Краток тест на "+experiment_label1;
  stimuli_csv_table="test.csv";   
  results_path=experiment_path+'short_test/';

}

else if (type_of_experiment=="test-full")
{
  message_for_the_type_of_experiment = "Цел тест на "+experiment_label1;
  stimuli_csv_table="design_final.csv";
  results_path=experiment_path+'long_test/';

}


else
{
  message_for_the_type_of_experiment =experiment_label2.charAt(0).toUpperCase() + experiment_label2.slice(1)
;
  stimuli_csv_table="design_final.csv";
  results_path=experiment_path+'main_experiment/';

    
}

results_path=results_path;

////php_file_path="https://vecjezicnost.ung.si/BGexp1/mediarec.php;
php_file_path=results_path+'mediarec.php';



var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c=>{
  const r = Math.random() * 16 | 0,v = c == 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
});
Header(
  // void
)
.log("uniqueID", id);


///////AddHost("http://sabotin.ung.si/~astepanov/SLO_COMP_audio/")
///////AddHost("http://sabotin.ung.si/~astepanov/ru_wh_pictures/")

///////AddHost("https://sabotin.ung.si/~dk0035/");
///////AddHost("https://ibexfarm.ung.si/uporabniki/dk0035/private/experiment2/stimuli/")
AddHost(stimuli_path)



//////////PreloadZip("https://sabotin.ung.si/~dk0035/zipped_stimuli_mono.zip")
//////////PreloadZip(zip_file_path)

    

//Sequence("finished");

Sequence("mobile_device_check","intro", "intro1",  "demo", "trials",  "demo_all", "expbegin", randomize("experiment"), SendResults(), "bye");
//Sequence("mobile_device_check","intro", "intro1", "trials",  "demo_all", "expbegin", randomize("experiment"), SendResults(), "bye");

//Sequence("mobile_device_check","intro", "intro1", "trials",  "demo_all", "expbegin", "bye");


//Sequence("mobile_device_check","intro", "intro1",  "demo", "trials",  "demo_all", "expbegin", "experiment", SendResults(), "bye");
//Sequence("mobile_device_check","intro", "intro1", "trials",  "demo_all", "expbegin", "experiment", SendResults(), "bye");

//Sequence("mobile_device_check","intro", "intro1",  "demo", "trials",  "demo1",  "demo2", "expbegin", randomize("experiment") SendResults(), "bye");



////Sequence("intro", "intro1", "trials",  "demo1",  "demo2", "expbegin", sepWith("sendAsync", randomize("experiment")), "Sync", SendResults(), "bye")


////Sequence("expbegin", sepWith("sendAsync", randomize("experiment")))


//Sequence("intro", "intro1", "intro2", "trials", "demo1",  "demo2","Sync", SendResults(), "bye")
////("intro", "trials")

////Sequence("intro", "intro1", "demo",  "trials", "demo1",  "demo2","expbegin", sepWith("sendAsync", randomize("experiment")) ok
/////Sequence("intro", "intro1", "trials","demo1",  "demo2","expbegin", sepWith("sendAsync", randomize("experiment")))
///Sequence("intro", "intro1", "trials","preload_demo_label","preload_demo" , startsWith("demo1","demo2"),  "demo1",  "demo2","preload_trials_label","preload_trials",startsWith("experiment"), "expbegin", sepWith("sendAsync", randomize("experiment")), "Sync", SendResults(), "bye");


////////Sequence("intro", "intro1", "trials","preload_demo_label")
/////////InitiateRecorder("https://vecjezicnost.ung.si/media_rec/mediarec.php", "")
    
/////////InitiateRecorder("https://vecjezicnost.ung.si/BGexp1/mediarec.php", "Моля, регулирайте настройките на своя браузър, за да разрешите достъп до микрофона. След това натиснете връзката по-долу.")
/////////InitiateRecorder("http://sabotin.ung.si/~dk0035/tests", "Това е само тест. Не използвайте това при реалния експеримент, защото резултатите НЯМА да бъдат изпратени към сървъра.")


    
/////////InitiateRecorder("https://ibexfarm.ung.si/uporabniki/dk0035/experiment2/short_test_results/mediarec.php", "Това е тест на новата ситемата. Не използвайте това при реалния експеримент, защото резултатите НЯМА да бъдат изпратени към сървъра.")
/////////InitiateRecorder("https://ibexfarm.ung.si/uporabniki/dk0035/experiment2/short_test_results/mediarec.php", "Това е тест на новата ситемата. Не използвайте това при реалния експеримент, защото резултатите НЯМА да бъдат изпратени към сървъра.")

 //InitiateRecorder(php_file_path, "Това е тест на новата ситема, който има за цел да определи дали резулттатите се записват в съответната .php директория")
newTrial(
 newText("Моля, регулирайте настройките на своя браузър, за да разрешите достъп до микрофона. След това натиснете връзката по-долу.")
)

    .label("intro");
    

UploadRecordings("sendAsync", "noblock");
UploadRecordings("Sync");

    let replaceConsentMic = ()=>{
            let consentLink = $(".PennController-PennController a.Message-continue-link");
            if (consentLink.length > 0 && consentLink[0].innerHTML.match(/^By clicking this link I understand that I grant this experiment's script access to my recording device/))
                consentLink.html("Давам съгласието си за използване на микрофона и за записване на гласа ми в този експеримент. ");
            else
                window.requestAnimationFrame( replaceConsentMic );
    };
    window.requestAnimationFrame( replaceConsentMic );



newTrial( "finished",
   exitFullscreen()
   ,
   newText("Ви се заблагодаруваме за интересот. Експериментот заврши.")
       .css("width","40em")
       .css("padding-top","10%")
       .css("line-height","1.4")
       .print()
    
    ,

   newText("Линкот што го кликнавте беше за пилот експериментот. Во моментов го водиме главниот експеримент. За да учествувате во истиот, притиснете го следниов линк "+"<a href=https://expt.pcibex.net/ibexexps/danilchr/experiment5_main_old_pc_ibex_final/experiment.html>https://expt.pcibex.net/ibexexps/danilchr/experiment5_main_old_pc_ibex_final/experiment.html</a>"+", или кликнете го линкот или ископирајте го во вашиот браузер.")
       .css("width","40em")
       .css("padding-top","10%")
       .css("line-height","1.4")
       //.print()
       
        ,

   newText("Во моментов има проблем со серверот. Ве замолуваме да се обидете повторно подоцна. Бладорам.")
       .css("width","40em")
       .css("padding-top","10%")
       .css("line-height","1.4")
       //.print()
    ,
    newButton("")
        //.print()
        .wait()
        
       )

,    
newTrial("mobile_device_check",

    newText("Проверка на устройството")
        .css("width","40em")
        .css("padding-top","10%")
        .css("line-height","1.4")
        //.print()
            ,
   screen_width=screen.width
   ,
   device_name=navigator.userAgent
   ,
   
   (window.matchMedia("(max-width: 767px)").matches?
   [mobile_device_based_on_screen_width="mobile_device"
   ]
   :
   [mobile_device_based_on_screen_width="desktop_device"]
   )
   ,
   
   (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)?
   [mobile_device_based_on_device_name="mobile_device"
   ]
   :
   [mobile_device_based_on_device_name="desktop_device"
   ]
   )
   //,
      
    //newButton("")
    //.print()
    //.wait()
   )
,
newTrial("intro1",

    newText(message_for_the_type_of_experiment)
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .center()
    .print()
    ,
     
     //newText(experiment_path+'\n'+stimuli_path+'\n'+results_path+'\n'+php_file_path+'\n'+zip_folder_path+'\n'+zip_file_path)
    //.css("width","40em")
    //.css("line-height","1.4")
    ////.css("padding-top","40px")
    //.css("padding-bottom","20px")
    //.center()
    //.print()
    //,

    newText("Здраво, истражуваме како мајчини говорители би оцениле реченици зависно од нивната сложеност.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()

    ,

    newText("Експериментот ќе трае 20 до 30 минути. Вашите податоци ќе бидат искористени исклучиво за експериментот и нема да бидат злоупотребени.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    ,
        
    
    newText("Вашата задача е да ислушате реченица и потоа да ја оцените на скала од 1 до 7 (1 – апсолутно неприфатлива, 7 – апсолутно прифатлива) по тоа колку Вам ви е прифатлива во секојдневниот говор, односно, по вашата интуиција како мајчин говорител. Секоја реченица ќе ја слушнете само еднаш.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    ,


      
    newText("Не се фокусирајте на граматичките правила или на прескриптивните норми. Единствено означете како Вам ви делува реченицата. Не се задржувајте и не се премислувајте при оценувањето, следете ја вашате прва мисла кога ќе оценувате реченица.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()

    ,
      
    newText("Ве замолуваме да ги оцените речениците што ќе ги слушнете по тоа како Вам лично ви делуваат. Следете ја Вашата интуиција без да се премислувате дали сте во право или дали грешите. Не се консултирајте со други говорители или со книги за време на експериментот.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    
      
    ,

 
  //newMediaRecorder("test0_recording_"+id+"_"+type_of_experiment, "audio")
          //.center()
          //.print()
          //.log()
          
    //,
 
      newButton("continue_to_questionaire", "Продолжете")
       .color("red")
       .center()
       .print()
        .wait()
        .log()
    
 
   
  ).setOption("hideProgressBar",true)

,

    
newTrial("demo",


    newHtml("demographics", "ru_wh_demo.html")
    .css("padding-top","10%")
    .css("line-height","1.4")
    .checkboxWarning("Ве замолуваме да изберете една од можностите.")
    .inputWarning("Ве замолуваме да го пополните ова поле.")
    .radioWarning("Ве замолуваме да изберете една од можностите.")
        .settings.log()
        .log("uniqueID", id)
        .print()
            
            

    ,
     newButton("continue_to_examples", "Продолжете")
       .color("red")
       .center()
       .print()
       .wait(
           getHtml("demographics").test.complete()
              .failure( getHtml("demographics").warn() )
           )
        .log()
       ).setOption("hideProgressBar",true)
    ,
    
  

         
        

newTrial ("trials",
    


    newText("Ќe почнеме со две пример реченици. Откако ќе ги оцените, експериментот ќе почне.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    ,

    
  newButton("continue_to_example_1", "Продолжете со пример број 1.")
          .color("red")
          .print()
          .center()
          .wait()
          .log()
          
          ).setOption("hideProgressBar",true)
,

    /*
    
newTrial("preload_demo_label",
      newText("Материалите за демонтрацията се зареждат. Моля изчакайте.")
        .css("width","40em")
        .css("line-height","1.4")
        //.css("padding-top","40px")
        .css("padding-bottom","20px")
        .print()
    ,
    newTimer("wait", 5000)
    .start()
    .wait()
           ).setOption("hideProgressBar",true)
 ,

  
CheckPreloaded( startsWith("demo1","demo2"))
    .label("preload_demo" );

   */

Template('train_examples.csv',
//Template("design_final.csv",
//Template("test_csv",
      variable => newTrial("demo_all",

 newText("Пример "+parseInt(variable.Index)+":")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    
    ,
    newButton("listen_to_example_all", "Слушнете ја реченицата.")
    .css("line-height","1.4")
    .center()
    .print()
    .wait()
    .log()
    ,




    newAudio("test_audio_all", variable.Path_of_audio_files_final_name)
         .play()
         .wait()
    ,
    
    newTimer("wait", 500)
    .start()
    .wait()
    ,

    newText("")
    .print()
    ,
    
    newText("<p style=\"font-size:18pt\">кон</p>")
    .css("line-height","1.4")
    .css("padding-top","5%")
    .center()
    //.print()
    ,
    
        //<p style=\"font-size:18pt\">+"</p>"
        newController("Question", {q: Question_asked, as: ["1","2","3","4","5","6","7"],randomOrder:false,presentHorizontally:true})
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
            .center()
            .print()
            .log()
            .wait()
            .remove()
      )
      )
      ,

newTrial ("demo1",

 newText("Пример 1:")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    
    ,
    newButton("listen_to_example_1", "Слушнете ја реченицата.")
    .css("line-height","1.4")
    .center()
    .print()
    .wait()
    .log()
    ,




    newAudio("test1_audio", "Training/mono/training_STE-001_mono.wav")
         .play()
         .wait()
    ,
    
    newTimer("wait", 500)
    .start()
    .wait()
    ,

    newText("")
    .print()
    ,
    
    newText("<p style=\"font-size:18pt\">кон</p>")
    .css("line-height","1.4")
    .css("padding-top","5%")
    .center()
    .print()
    ,
    
        //<p style=\"font-size:18pt\">+"</p>"
        newController("Question", {q: Question_asked, as: ["1","2","3","4","5","6","7"],randomOrder:false,presentHorizontally:true})
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
            .center()
            .print()
            .log()
            .wait()
            .remove()
      ,
    

//  newText("instructions", "Моля, повторете и довършете изречението, като поставите думата по-горе в подходящата форма и запишете отговора си:")
//          .print()
//          .center()
//          .css("padding-bottom","20px")
//          .css("padding-top","20px")


  newText("instructions", "Моля, довършете изречението, като поставите думата по-горе в подходящата форма и запишете отговора си:")
          .print()
          .center()
          .css("padding-bottom","20px")
          .css("padding-top","20px")


//    newAudio("myAudio", "http://myserver/audio.mp3")
      ,

     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
  
      //newMediaRecorder("test1_recording_"+id+"_"+type_of_experiment, "audio")
          //.print()
          //.log()
          //.center()
          //.once()
         
          
         //,
      
    //newButton("Запис")
        //.print()
        //.wait()
        //.remove()
        
    //,

    //getMediaRecorder("test1_recording_"+id+"_"+type_of_experiment)
        //.record()
        
    //,

    //newButton("Стоп")
        //.print()
        //.wait()
        //.remove()
        
    //,

    //getMediaRecorder("test1_recording_"+id+"_"+type_of_experiment)
        //.stop()
        
    //,
      
     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
     
      ,
      
     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
      
      newButton("continue_to_example_2", "Продължете с пример 2")
          .color("red")
          .print()
          .center()
          .wait()
          .log()
).setOption("hideProgressBar",true)
,

newTrial("demo2",

 newText("Пример 2:")
     .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    ,
    
    newButton("listen_to_example_2", "Изслушайте изречението")
    .css("line-height","1.4")
    .center()
    .print()
    .wait()
    .log()
    ,


    newAudio("test2_audio", "Training/mono/training_STE-002_mono.wav")
         .play()
         .wait()
    ,
    newTimer("wait", 500)
    .start()
    .wait()
    ,


    newText("")
    .print()
    ,
    

    newText("<p style=\"font-size:18pt\">крава</p>")
    .css("line-height","1.4")
    .center()
    .css("padding-top","5%")
    .print()
    ,


        newController("Question", {q: Question_asked, as: ["1","2","3","4","5","6","7"],randomOrder:false,presentHorizontally:true})
            .css("width","40em")
            .css("line-height","1.4")
            //.css("padding-top","40px")
            .css("padding-bottom","20px") 
            .center()
            .print()
            .log()
            .wait()
            .remove()
,

//  newText("instructions", "Моля, повторете и довършете изречението, като поставите думата по-горе в подходящата форма, и запишете отговора си:")
//          .print()
//          .center()
//          .css("padding-bottom","20px")
//          .css("padding-top","20px")


  newText("instructions", "Моля, довършете изречението, като поставите думата по-горе в подходящата форма, и запишете отговора си:")
          .print()
          .center()
          .css("padding-bottom","20px")
          .css("padding-top","20px")

//    newAudio("myAudio", "http://myserver/audio.mp3")
      ,

     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
  
      //newMediaRecorder("test2_recording_"+id+"_"+type_of_experiment, "audio")
          //.print()
          //.log()
          //.center()
          //.once()
      //,
      
     //newButton("Запис")
        //.print()
        //.wait()
        //.remove()
        
    //,

    //getMediaRecorder("test2_recording_"+id+"_"+type_of_experiment)
        //.record()
        
    //,

    //newButton("Стоп")
        //.print()
        //.wait()
        //.remove()
        
    //,

    //getMediaRecorder("test2_recording_"+id+"_"+type_of_experiment)
        //.stop()
        
    //,
      
     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
      

      newButton("continue_to_experiment", "Продължете с експеримента")
          .color("red")
          .print()
          .center()
          .wait()
          .log()

).setOption("hideProgressBar",true)

,
/*
newTrial("preload_trials_label",
       newText("Материалите за демонтрацията се зареждат. Моля изчакайте.")
       .css("width","40em")
       .css("padding-top","10%")
       .css("line-height","1.4")
       .print()
           ).setOption("hideProgressBar",true)

    ,
    newTimer("wait", 5000)
    .start()
    .wait()
           ).setOption("hideProgressBar",true)
 ,

  
CheckPreloaded( startsWith("experiment"))
    .label("preload_trials" );    

*/

newTrial ("expbegin",
    
      newText("Сега сме спремни да почнеме со експериментот.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    ,

      newButton("begin_experiment", "Почнете со експериментот.")
          .color("red")
          .print()
          .center()
          .wait()
          .log()
).setOption("hideProgressBar",true)
,

Template(stimuli_csv_table,
//Template("design_final.csv",
//Template("test_csv",
      variable => newTrial("experiment",

    fullscreen()
        ,
    
    newTimer(500)
        .start()
        .wait()
    ,


    newButton("listen_to_sentence", "Слушнете ја реченицата.")
    .css("line-height","1.4")
    .center()
    .print()
    .wait()
    .log()
    ,


    newAudio("target", variable.Path_of_audio_files_final_name)
         .play()
         .wait()
    ,
    newTimer("wait", 500)
    .start()
    .wait()
    ,


    newText("")
    .print()
    ,
    
    //newText("<p style=\"font-size:18pt\">"+variable.Target_noun_base_form+"</p>")
    //.css("line-height","1.4")
    //.css("padding-top","5%")
    //.center()
    //.print()
    //,

        newController("Question", {q: Question_asked, as: ["1","2","3","4","5","6","7"],randomOrder:false,presentHorizontally:true})
        //newController("Question", {q: "Моля довършете изречението, като поставете последната дума в подходящата форма чрез натискане с мишката върху съответната форма", as: [variable.Target_noun_base_form,variable.Target_noun_plural_form,variable.Target_noun_count_form],randomOrder:false,presentHorizontally:true, hasCorrect: parseInt(variable.Correct_response_as_integer)})
            .css("width","40em")
            .css("line-height","1.4")
            //.css("padding-top","40px")
            .css("padding-bottom","20px") 
            .center()
            .print()
            .log()
            .wait()
            .remove()
,
    


  newText("instructions", "Оценете ја реченицата од 1 (апсолутно неприфатлива) до 7 (апсолутно прифатлива).")
          .print()
          .center()
          .css("padding-bottom","20px")
          .css("padding-top","20px")

//    newAudio("myAudio", "http://myserver/audio.mp3")
      ,

     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
  

          
        //newMediaRecorder(variable.Output_audio_file_partial_filename+"_"+id+"_"+type_of_experiment, "audio")
          //.print()
          //.log()
          //.center()
          //.once()
      //,
      
     //newButton("Запис")
        //.print()
        //.wait()
        //.remove()
        
   //,

    //getMediaRecorder(variable.Output_audio_file_partial_filename+"_"+id+"_"+type_of_experiment)
        //.record()
        
    //,

    //newButton("Стоп")
        //.print()
        //.wait()
        //.remove()
        
    //,

    //getMediaRecorder(variable.Output_audio_file_partial_filename+"_"+id+"_"+type_of_experiment)
        //.stop()
        
      //,
      
     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
      
      newButton("continue_with_next_sentence", "Продолжете со следната реченица.")
          .color("red")
          .print()
          .center()
          .wait()
          .log()
  
  
  ).setOption("hideProgressBar",false)
.log("Question asked",Question_asked)
.log("Block",variable.Block)
.log("Type",variable.Type)
.log("Condition label",variable.Condition_label)
.log("Group",variable.Group)
.log("Sentences",variable.Sentences)
.log("Prosody",variable.Prosody)
.log("Subject",variable.Subject)
.log("Clitic gender",variable.Clitic_gender)
.log("Direct object gender",variable.Direct_object_gender)
.log("Indirect object gender",variable.Indirect_object_gender)
.log("Num inter elements",variable.Num_inter_elements)
.log("Audio files numbering",variable.Audio_files_numbering)
.log("File prefix of all audio files",variable.File_prefix_of_all_audio_files)
.log("All audio files original name",variable.All_audio_files_original_name)
.log("Path of audio files final name",variable.Path_of_audio_files_final_name)
.log("Unique id",id)
.log("Type of experiment",type_of_experiment)
.log("Screen width",screen_width)
.log("Device name",device_name)
.log("Mobile device based on screen width",mobile_device_based_on_screen_width)
.log("Mobile device based on device name",mobile_device_based_on_device_name)


  )
,
  
newTrial( "bye" ,
   exitFullscreen()
   ,
   newText("Го завршивте експериментот. Благодарам што учествувавте! Ако имате некои прашаша за експериментот, слободно обратете се по електронска пошта на 'metodi.efremov@ung.si'.")
       .css("width","40em")
       .css("padding-top","10%")
       .css("line-height","1.4")
       .print()

  //  ,  
  // newButton()
      .wait()  // Wait for a click on a non-displayed button = wait here forever
          ).setOption("hideProgressBar",true)


DebugOff();
//.setOption("showProgressBar ",false)
//.setOption( "countsForProgressBar" , false )
// Make sure the progress bar is full upon reaching this last (non-)trial