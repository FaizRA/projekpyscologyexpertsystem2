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
            console.log(QApages);





            for (i = 1; i <= QApages; i++) {

                $('#QA').append(['<div class="QAB box-' + i + '" id="quis"> ' + i + ' </div>']);
            }

            let Pagebox = 1;
            let QAcounter = 0;
            let ItemPerPage = 10;

            for (j = 0; j < qaCount; j++) {

                $('.box-' + Pagebox).append(
                    [
                        '<div class="quiz">',

                        '<div class="question">',
                        '<h3>Apakah anda merasakan gejala meriang pusing dan lain-lain ?</h3>',

                        '</div>',
                        '<div class="answer">',

                        '<div class="instruction-box">',
                        '<p>Pilih salah 1</p>',

                        '</div>',
                        '<div class="answer-block no">',
                        '<div class="answer-title">',
                        '<p>Tidak</p>',
                        '</div>',
                        '<div class="input-container">',
                        '<div class="in-sm">',
                        '<input type="radio" name="option" value="val">',
                        '<div class="checkmark">',
                        '<div class="checked-mark"></div>',
                        '</div>',
                        '</div>',
                        '</div>',
                        '<div class="input-container">',
                        '<div class="in-m">',
                        '<input type="radio" name="option" value="val">',
                        '<div class="checkmark">',
                        '<div class="checked-mark"></div>',
                        '</div>',
                        '</div>',
                        '</div>',
                        '<div class="input-container">',
                        '<div class="in-l">',
                        '<input type="radio" name="option" value="val">',
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
                        '<input type="radio" name="option" value="val">',
                        '<div class="checkmark">',
                        '<div class="checked-mark"></div>',
                        '</div>',
                        '</div>',
                        '</div>',
                        '<div class="input-container">',
                        '<div class="in-m">',
                        '<input type="radio" name="option" value="val">',
                        '<div class="checkmark">',
                        '<div class="checked-mark"></div>',
                        '</div>',
                        '</div>',
                        '</div>',
                        '<div class="input-container">',
                        '<div class="in-l">',
                        '<input type="radio" name="option" value="val">',
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
                        '<input type="radio" name="option" value="val">',
                        '<div class="checkmark">',
                        '<div class="checked-mark"></div>',
                        '</div>',
                        '</div>',
                        '</div>',
                        '<div class="input-container">',
                        '<div class="in-m">',
                        '<input type="radio" name="option" value="val">',
                        '<div class="checkmark">',
                        '<div class="checked-mark"></div>',
                        '</div>',
                        '</div>',
                        '</div>',
                        '<div class="input-container">',
                        '<div class="in-l">',
                        '<input type="radio" name="option" value="val">',
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

            /*
                                for (i = 1; i <= QApages; i++) {
                                    var k = i * 10;
                                    var q = k - 10;
                                    $('#QA').append(['<div class="QAB box-' + i + '"> ' + i + ' </div>']);
                                    for (j = 0; j < qaCount; j++) {
            
                                        let page = i * 10;
                                        if (j < k && i === 1) {
            
                                            $('.box-1').append(
                                                [
                                                    '<div class="quiz">',
                                                    '<div class="question">',
                                                    '<h3>' + JOperson.questions[j].qustion + j + '</h3>',
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
                                                ].join('')
                                            );
            
                                        }
            
                                        if (j >= 10 && j < 20 && i === 2) {
            
                                            $('.box-2').append(
                                                [
                                                    '<div class="quiz">',
                                                    '<div class="question">',
                                                    '<h3>' + JOperson.questions[j].qustion + j + '</h3>',
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
                                                ].join('')
                                            );
            
                                        }
            
            
                                        if (j >= 20 && j < 30 && i === 3) {
            
                                            $('.box-3').append(
                                                [
                                                    '<div class="quiz">',
                                                    '<div class="question">',
                                                    '<h3>' + JOperson.questions[j].qustion + j + '</h3>',
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
                                                ].join('')
                                            );
            
                                        }
            
            
                                        if (j >= 30 && j < qaCount && i === 4) {
            
                                            $('.box-4').append(
                                                [
                                                    '<div class="quiz">',
                                                    '<div class="question">',
                                                    '<h3>' + JOperson.questions[j].qustion + j + '</h3>',
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
                                                ].join('')
                                            );
            
                                        }
            
            
            
            
                                    }
            
                                }
            */
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
                }
            })


            var indicatorsobj = {};

            for (hu = 0; hu < qaCount; hu++) {
                indicatorsobj[hu] = {
                    option: "option" + hu,
                    checkstatus: 0,
                    edited: 0,
                    value: 0
                };
            }
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

                            $('.indicator p').html(persentagetoput + '%');
                            $('.progress-bar').attr("style", 'width:' + persentagetoput + '%');


                        }
                    }

                });




            }




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
    xhttp.open("GET", "psyc.json", true);
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