const main = () => {
    
    const colorSwitch = document.getElementById('checkbox');

    function switchColor(e){
        if(e.target.checked){
            document.documentElement.setAttribute('data-theme', 'theme2');
        }else {
            document.documentElement.setAttribute('data-theme', 'theme1');
        }
    }

    colorSwitch.addEventListener('change', switchColor, false);

}