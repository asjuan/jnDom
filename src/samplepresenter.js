var present = function newPresenter(m, v) {
    v.click('language', function () {
       v.write(m.greeting);
    });
    v.click('clear', function () {
       v.write('');
    })
    return {
       'initDefault': function () {
        },
        'initEnglish': function () {
            m.greeting = 'Hello world';
            
        },
        'initSpanish': function () {
            m.greeting = 'Hola mundo';
        }
    };
    
}
module.exports = present;
