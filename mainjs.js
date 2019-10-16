$(function () {

    $('.indicator p').html(0 + '%');
    $('.progress-bar').attr("style", 'width:' + 0 + '%');



    //JSON REQUEST
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            // console.log(xhttp.responseText);
            let question = xhttp.responseText; //take json value
            // console.log(question.id);

            let JOperson = JSON.parse(question); // parse json to jav obj
            // console.log(JOperson);
            // console.log(JOperson.questions.length);

            let qaCount = JOperson.questions.length;






            /*
                                console.log('Math.floor(3.14) = ' + Math.floor(3.14));
                                console.log('Math.ceil(3.14) = ' + Math.ceil(3.14));
                                console.log('Math.round(3.14) = ' + Math.round(3.14));
                                console.log('Math.trunc(3.14) = ' + Math.trunc(3.14));
            
                                console.log('Math.floor(3.64) = ' + Math.floor(3.64));
                                console.log('Math.ceil(3.64) = ' + Math.ceil(3.64));
                                console.log('Math.round(3.64) = ' + Math.round(3.64));
                                console.log('Math.trunc(3.64) = ' + Math.trunc(3.64));
            */
            let QApages = Math.ceil(qaCount / 10);
            //console.log(QApages);





            for (i = 1; i <= QApages; i++) {

                $('#QA').append(['<div class="QAB box-' + i + '" id="quis"> ' + i + ' </div>']);
            }

            let Pagebox = 1;
            let QAcounter = 0;
            let ItemPerPage = 10;

            let value1 = 1;
            let value2 = 0.8;
            let value3 = 0.6;
            let value4 = 0.4;
            let value5 = 0.2;
            let value6 = -0.2;
            let value7 = -0.4;
            let value8 = -0.6;
            let value9 = -0.8;

            for (j = 0; j < qaCount; j++) {

                $('.box-' + Pagebox).append(
                    [
                        '<div class="quiz">',

                        '<div class="question">',
                        '<h3>' + (j + 1) + ". " + JOperson.questions[j].qustion + '</h3>',

                        '</div>',
                        ' <div class="answer" id="answer' + j + '">',

                        '<div class="instruction-box">',
                        '<p>Pilih salah 1</p>',

                        '</div>',
                        '<div class="answer-block no">',
                        '<div class="answer-title">',
                        '<p>Tidak</p>',
                        '</div>',

                        '<div class="input-container">',
                        '<div class="in-l">',
                        '<input type="radio" id="optiona" name="option' + j + '" value="' + value9 + '">',
                        '<div class="checkmark">',
                        '<div class="checked-mark"></div>',
                        '</div>',
                        '</div>',
                        '</div>',


                        '<div class="input-container">',
                        '<div class="in-m">',
                        '<input type="radio" id="optiona" name="option' + j + '" value="' + value8 + '">',
                        '<div class="checkmark">',
                        '<div class="checked-mark"></div>',
                        '</div>',
                        '</div>',
                        '</div>',

                        '<div class="input-container">',
                        '<div class="in-sm">',
                        '<input type="radio" id="optiona" name="option' + j + '" value="' + value7 + '">',
                        '<div class="checkmark">',
                        '<div class="checked-mark"></div>',
                        '</div>',
                        '</div>',
                        '</div>',


                        '</div>',

                        '<div class="answer-block maybe">',
                        '<div class="answer-title">',
                        '<p>Mungkin</p>',
                        '</div>',
                        '<div class="input-container">',
                        '<div class="in-sm">',
                        '<input type="radio" id="optiona" name="option' + j + '" value="' + value6 + '">',
                        '<div class="checkmark">',
                        '<div class="checked-mark"></div>',
                        '</div>',
                        '</div>',
                        '</div>',
                        '<div class="input-container">',
                        '<div class="in-m">',
                        '<input type="radio" id="optiona" name="option' + j + '" value="' + value5 + '">',
                        '<div class="checkmark">',
                        '<div class="checked-mark"></div>',
                        '</div>',
                        '</div>',
                        '</div>',
                        '<div class="input-container">',
                        '<div class="in-l">',
                        '<input type="radio" id="optiona" name="option' + j + '" value="' + value4 + '">',
                        '<div class="checkmark">',
                        '<div class="checked-mark"></div>',
                        '</div>',
                        '</div>',
                        '</div>',
                        '</div>',
                        '<div class="answer-block yes">',
                        '<div class="answer-title">',
                        '<p>Ya</p>',
                        '</div>',
                        '<div class="input-container">',
                        '<div class="in-sm">',
                        '<input type="radio" id="optiona" name="option' + j + '" value="' + value3 + '">',
                        '<div class="checkmark">',
                        '<div class="checked-mark"></div>',
                        '</div>',
                        '</div>',
                        '</div>',
                        '<div class="input-container">',
                        '<div class="in-m">',
                        '<input type="radio" id="optiona" name="option' + j + '" value="' + value2 + '">',
                        '<div class="checkmark">',
                        '<div class="checked-mark"></div>',
                        '</div>',
                        '</div>',
                        '</div>',
                        '<div class="input-container">',
                        '<div class="in-l">',
                        '<input type="radio" id="optiona" name="option' + j + '" value="' + value1 + '">',
                        '<div class="checkmark">',
                        '<div class="checked-mark"></div>',
                        '</div>',
                        '</div>',
                        '</div>',
                        '</div>',

                        '</div>',
                        '<hr>',
                        '</div>'
                    ].join('')
                );

                QAcounter = QAcounter + 1;

                if (QAcounter === ItemPerPage) {
                    QAcounter = 0;
                    Pagebox = Pagebox + 1;
                }

            }

            var indicatorsobj = {};

            var quizprogress = 0;

            for (hu = 0; hu < qaCount; hu++) {
                // console.log(JOperson.questions[hu].qustion)
                // console.log(JOperson.questions[hu].bobot)
                indicatorsobj[hu] = {
                    option: "option" + hu,
                    kategori: JOperson.questions[hu].kategori,
                    bobot: JOperson.questions[hu].bobot,
                    checkstatus: 0,
                    edited: 0,
                    value: 0

                };
            }

            console.log('indicatorsobj')
            console.log(indicatorsobj)

            var indicatorsprog = 0;
            for (ex = 0; ex < qaCount; ex++) {
                var selected = $("#answer" + ex).find("input[name='option" + ex + "']");
                selected.change(function () {
                    //alert($(this).val());
                    let panelID = $(this).attr('name');
                    console.log(panelID);
                    console.log($(this).val());
                    var nilaiBobot = $(this).val();


                    //edit indicator counter if checked by checking attr name in jav obj
                    for (ji = 0; ji < qaCount; ji++) {
                        var jobjname = indicatorsobj[ji].option;
                        if (jobjname === panelID) {

                            // console.log(indicatorsobj[ji].checkstatus);
                            indicatorsobj[ji].checkstatus = 1;
                            indicatorsobj[ji].value = nilaiBobot;
                            // console.log('checked to');
                            // console.log(indicatorsobj[ji].checkstatus);
                            // console.log(indicatorsobj);
                        }
                    }
                    //edit checked for indicator counter if checked
                    for (ji = 0; ji < qaCount; ji++) {

                        if (indicatorsobj[ji].checkstatus === 1 && indicatorsobj[ji].edited === 0) {
                            indicatorsprog = indicatorsprog + 1;
                            indicatorsobj[ji].edited = 1;
                            //indicatorsobj[ji].value = nilaiBobot;
                            console.log(indicatorsprog);
                            console.log(indicatorsobj);

                            var persentage = 100 / qaCount;
                            var persentagetoput = Math.round(persentage * indicatorsprog);

                            if (persentagetoput === 100) {
                                quizprogress = 1;
                            }

                            $('.indicator p').html(persentagetoput + '%');
                            $('.progress-bar').attr("style", 'width:' + persentagetoput + '%');


                        }
                    }

                });




            }



            let currentPage = 1;

            $('.box-' + currentPage).addClass('box-active');

            if ($('.box-' + currentPage).hasClass('box-active')) {
                $('#BPrev').addClass('disabled');
            }

            console.log(currentPage);

            $('#BNext').on('click', function () {
                if (currentPage < QApages) {
                    $('#BPrev').removeClass('disabled');
                    $('.box-' + currentPage).removeClass('box-active');
                    currentPage = currentPage + 1;
                    $('.box-' + currentPage).addClass('box-active');

                    if (currentPage === QApages) {
                        $('#BNext h3').html('Result');
                    }
                } else if (currentPage === QApages) {
                    if (quizprogress === 1 || quizprogress === 0) {
                        //mob
                        $('.boxToggler').css('display', 'none');
                        $('.box-' + currentPage).removeClass('box-active');
                        $('.result').css('display', 'flex');

                        /*
                                                var sickness = [{
                                                        penyakit: "Delirium",
                                                        akskks: 1
                                                    }, {
                                                        penyakit: "dalaria",
                                                        akskks: 1
                                                    }

                                                ]
                                                console.log(sickness);
                                                for (sad = 0; sad < qaCount; sad++) {

                                                    var currentsickness = JOperson.questions[sad].kategori;
                                                    console.log(currentsickness);

                                                    var sicklenght = Object.keys(sickness).length;
                                                    console.log(sicklenght);
                                                    console.log(sickness[1].penyakit);


                                                    for (sk = 0; sk < sicklenght; sk++) {
                                                        penyakittersimpan = sickness[sk].penyakit;
                                                        if (penyakittersimpan === currentsickness) {

                                                        } else {
                                                            sickness[sk].penyakit = currentsickness;
                                                        }

                                                    }


                                                    console.log(sickness);
                                                }
                        */

                        var sickness = {};
                        for (sad = 0; sad < qaCount; sad++) {



                            sickness[sad] = {
                                penyakit: JOperson.questions[sad].kategori,
                                copied: 0
                            }
                        }
                        //  console.log(sickness);

                        var same = 0;


                        if (qaCount != 0) {
                            same = 1;
                            for (sad = 1; sad < qaCount; sad++) {
                                var nam1 = JOperson.questions[sad - 1].kategori
                                //   console.log(nam1);
                                var nam2 = JOperson.questions[sad].kategori
                                //  console.log(nam2)
                                if (nam1 !== nam2) {
                                    same = same + 1
                                } else {}
                            }
                        }
                        console.log(same);

                        var soc = {};
                        var sicklenght = Object.keys(sickness).length;
                        console.log(sicklenght);

                        for (cui = 0; cui < same; cui++) {
                            soc[cui] = {
                                penyakit: 'needvalue'
                            }

                            for (dfg = 0; dfg < sicklenght; dfg++) {
                                if (soc[cui].penyakit == 'needvalue' && sickness[dfg].copied == 0) {
                                    soc[cui] = {
                                        penyakit: sickness[dfg].penyakit
                                    }
                                    for (kas = 0; kas < sicklenght; kas++) {
                                        if (sickness[kas].penyakit == soc[cui].penyakit) {
                                            sickness[kas] = {
                                                penyakit: sickness[kas].penyakit,
                                                copied: 1
                                            }
                                        }
                                    }
                                }

                            }
                        }
                        console.log(soc)
                        //console.log(sickness)


                        soclenght = Object.keys(soc).length;
                        var no0 = 0;
                        var indicatorsobj2 = {};

                        for (hu = 0; hu < qaCount; hu++) {
                            if (indicatorsobj[hu].value != 0) {
                                console.log(indicatorsobj[hu].option)
                                console.log(indicatorsobj[hu].value)
                                no0 = no0 + 1;

                            }

                        }
                        console.log(no0);

                        var kus = 0;
                        for (hu = 0; hu < qaCount; hu++) {
                            if (indicatorsobj[hu].value !== 0) {
                                console.log(indicatorsobj[hu].value)
                                indicatorsobj2[kus] = {
                                    option: indicatorsobj[hu].option,
                                    kategori: indicatorsobj[hu].kategori,
                                    bobot: indicatorsobj[hu].bobot,
                                    checkstatus: indicatorsobj[hu].checkstatus,
                                    edited: indicatorsobj[hu].edited,
                                    value: indicatorsobj[hu].value,
                                    cfhe: indicatorsobj[hu].value * indicatorsobj[hu].bobot

                                }
                                kus = kus + 1;
                            }
                        }
                        console.log(indicatorsobj2);


                        var nubleng = Object.keys(indicatorsobj2).length;
                        console.log(nubleng)



                        for (qwer = 0; qwer < soclenght; qwer++) {
                            var countindex = 0;
                            var cfhe_1 = 0;
                            var fortcfhep = 0;
                            var tempobj = {}
                            var forxfcheN = 0;
                            var forminus1 = 0;
                            for (jin = 0; jin < nubleng; jin++) { //cari jumlah option dengan kategori x
                                if (indicatorsobj2[jin].kategori == soc[qwer].penyakit) {
                                    tempobj[countindex] = {
                                        option: indicatorsobj2[jin].option,
                                        kategori: indicatorsobj2[jin].kategori,
                                        bobot: indicatorsobj2[jin].bobot,
                                        checkstatus: indicatorsobj2[jin].checkstatus,
                                        edited: indicatorsobj2[jin].edited,
                                        value: indicatorsobj2[jin].value,
                                        cfhe: indicatorsobj2[jin].cfhe

                                    }
                                    countindex = countindex + 1

                                }
                            }
                            console.log(tempobj)
                            console.log(countindex)
                            for (ixa = 0; ixa < countindex - 1; ixa++) {
                                if (ixa == 0) {
                                    forminus1 = 1 - tempobj[ixa].cfhe;
                                    forxfcheN = forminus1 * tempobj[ixa + 1].cfhe
                                    fortcfhep = forxfcheN + tempobj[ixa].cfhe

                                } else {
                                    forminus1 = 1 - fortcfhep;
                                    forxfcheN = forminus1 * tempobj[ixa + 1].cfhe
                                    fortcfhep = forxfcheN + fortcfhep
                                }
                            }
                            soc[qwer] = {
                                penyakit: soc[qwer].penyakit,
                                hasil: fortcfhep
                            }
                        }
                        console.log(soc);

                        var hasileng = Object.keys(soc).length;
                        var roundedhasil = 0;

                        for (hohoinohoi = 0; hohoinohoi < hasileng; hohoinohoi++) {
                            roundedhasil = Math.round(soc[hohoinohoi].hasil * 100);



                            $('.result').append(
                                [
                                    '<div class="indikasi">',
                                    '<div class="explanat">',
                                    '<p class="indikasi">' + soc[hohoinohoi].penyakit + '</p>',
                                    '</div>',
                                    '<div class="persentage">',
                                    '<p class="persentage">' + roundedhasil + '%</p>',
                                    '</div>',
                                    '</div>'
                                ].join('')
                            );


                        }






                        /*
                                                

                                                var sickness = [];
                                                for (fuk = 0; fuk < same; fuk++) {

                                                    sickness[fuk] = {
                                                        penyakit: 'penyakit' + fuk
                                                    }
                                                }
                                                for (bic = 0; bic < qaCount; bic++) {
                                                    for (kek = 0; kek < same; kek++) {
                                                        for (ajg = 0; ajg < qaCount; ajg++) {
                                                            if (sickness[kek].penyakit != JOperson.questions[ajg].kategori) {
                                                                sickness[kek] = {
                                                                    penyakit: JOperson.questions[ajg].kategori
                                                                }
                                                            }
                                                        }
                                                    }

                                                }
                                                console.log(sickness)

                        */

                    } else {
                        alert('quiz belum selesai')
                    }
                }

            })

            $('#BPrev').on('click', function () {
                if (currentPage - 1 === 1) {
                    $('.box-' + currentPage).removeClass('box-active');
                    currentPage = currentPage - 1;
                    $('#BPrev').addClass('disabled');
                    $('.box-' + currentPage).addClass('box-active');
                } else if (currentPage === 1) {

                } else {
                    $('.box-' + currentPage).removeClass('box-active');
                    currentPage = currentPage - 1;
                    $('.box-' + currentPage).addClass('box-active');
                    $('#BNext h3').html('Next');
                }
            })







            /*
                                $('#BNext').on('click', function () {
                                    if ($('.box-1').hasClass('box-active')) {
                                        $('.box-1').removeClass('box-active');
                                        $('.box-2').addClass('box-active');
                                        $('#BPrev').removeClass('disabled');
                                    } else if ($('.box-2').hasClass('box-active')) {
                                        $('.box-2').removeClass('box-active');
                                        $('.box-3').addClass('box-active');
                                        $('#BNext h3').html('Result');
                                    }
                                })
            
                                $('#BPrev').on('click', function () {
                                    if ($('.box-3').hasClass('box-active')) {
                                        $('.box-3').removeClass('box-active');
                                        $('.box-2').addClass('box-active');
                                        $('#BNext h3').html('Next');
                                    } else if ($('.box-2').hasClass('box-active')) {
                                        $('.box-2').removeClass('box-active');
                                        $('.box-1').addClass('box-active');
                                        $('#BPrev').addClass('disabled');
                                    }
                                })
            
            */

        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();


    // QUIZ BOX

    /*
    let quizCont = ['<div></div>']
    let quiz = [
        '<div class="quiz">',
        '<div class="question">',
        '<h3>Apakah anda merasakan gejala meriang pusing dan lain-lain ?</h3>',
        '</div>',
        ' <div class="answer">',
        '<div class="input-container-no">',
        '<p> Tidak </p>',
        '</div>',
        '<div class="input-container">',
        '<input class="input-size-s" type="radio" name="option" value="val">',
        '<div class="checkmark input-size-s">',
        '<div class="checked-mark-s"></div>',
        '</div>',
        '</div>',
        '<div class="input-container">',
        '<input class="input-size-m" type="radio" name="option" value="val">',
        '<div class="checkmark input-size-m">',
        '<div class="checked-mark-m"></div>',
        '</div>',
        '</div>',
        '<div class="input-container">',
        '<input class="input-size-l" type="radio" name="option" value="val">',
        '<div class="checkmark input-size-l">',
        '<div class="checked-mark-l"></div>',
        '</div>',
        '</div>',
        '<div class="input-container">',
        '<input class="input-size-xl" type="radio" name="option" value="val">',
        '<div class="checkmark input-size-xl">',
        '<div class="checked-mark-xl"></div>',
        '</div>',
        '</div>',
        '<div class="input-container">',
        '<input class="input-size-xxl" type="radio" name="option" value="val">',
        '<div class="checkmark input-size-xxl">',
        '<div class="checked-mark-xxl"></div>',
        '</div>',
        '</div>',
        '<div class="input-container-yes">',
        '<p> Ya </p>',
        '</div>',
        '</div>',
        '<hr>',
        '</div>'
    ].join('');

    //$('#QA').append(html);
    */


    //console.log(html);



})