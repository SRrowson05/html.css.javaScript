const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");


const setValues = (FontSize, BgColor) =>{
    selectFontSize.value = FontSize;
    selectBgColor.value = BgColor;
    mainElement.style.fontSize = FontSize;
    mainElement.style.backgroundColor = BgColor;
};


const initialSetup = () => {
    const BgColor = localStorage.getItem("bgColor");

    const FontSize = localStorage.getItem("fontSize");

    if(BgColor && FontSize){
       setValues(FontSize, BgColor);
    }

    if(!BgColor && !FontSize) {
       setValues("16px", "aqua");
    }
    if(!BgColor & FontSize) {
        setValues(FontSize, "aqua");
    }
    if(BgColor && !FontSize) {
        setValues("16px", BgColor);
    }
};

const changeFontSize = (event) => {
    const selectFontSize = event.target.value;
    mainElement.style.fontSize = selectFontSize;
    localStorage.setItem("fontSize", selectFontSize);
};

const changeBgColor = (event) => {
    const selectBgColor = event.target.value;
    mainElement.style.backgroundColor = selectBgColor;
    localStorage.setItem("bgColor", selectBgColor);
};

const clearLocalStorage = () => {
    localStorage.removeItem("bgColor");
    localStorage.removeItem("fontSize");
    setValues("16px", "aqua");
};
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetButton.addEventListener("click", clearLocalStorage);

initialSetup();