/* 
    enums representa una enumeracion, su objetivo es
    trabajar con valores que tengan un sentido semantico
*/


(() => {


    enum AudioLevel {
        min = 1,
        medium,
        max = 10
    }

    let currentAudio = AudioLevel.max;

    console.log(currentAudio)
    console.log(AudioLevel)


})()