function myDark() {

    !document.querySelector("#ht").classList.contains('dark') ? ht.classList.add('dark') : ht.classList.remove('dark');

    // let darkMode = localStorage.getItem("dark-mode");

    // darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked

    // if (darkMode === "disabled") {
    //     ht.classList.add('dark');
    //     darkMode = localStorage.setItem("dark-mode");

    // } else {
    //     ht.classList.remove('dark');
    //     localStorage.setItem("dark-mode", "disabled");

    // }


    // if (!document.querySelector("#ht").classList.contains('dark')) {
    //     ht.classList.add('dark');

    //     if (darkMode === 'disabled') {
    //         localStorage.setItem("dark-mode", "enabled");
    //         // ht.classList.add('dark');
    //         darkMode = localStorage.setItem("dark-mode");
    //     }

    // } else {
    //     ht.classList.remove('dark');

    //     if (darkMode === 'enabled') {
    //         localStorage.setItem("dark-mode", "disabled");
    //         // ht.classList.remove('dark');
    //         darkMode = localStorage.setItem("dark-mode");
    //     }

    // }



    let light1 = document.querySelector('#light1');
    let light2 = document.querySelector('#light2');

    if (!light1.classList.contains('invisible')) {
        light1.classList.add('invisible');
        light2.classList.remove('invisible');
    } else {
        light2.classList.add('invisible');
        light1.classList.remove('invisible');
    }





    // if (
    //     localStorage.getId('ht') === 'dark' ||
    //     (!('ht' in localStorage) &&
    //         window.matchMedia('(prefers-color-scheme: dark)').matches)
    // ) {
    //     document.documentElement.classList.add('dark');
    // } else {
    //     document.documentElement.classList.remove('dark');
    // }
}

// myDark();