    const pomodorobtn=document.getElementsByClassName("pilled-op-pom");
    const analyticsbtn=document.getElementsByClassName("pilled-op-ana");
    const analytics=document.getElementsByClassName("analytics");

    function pombtn(){
        pomodorobtn[0].classList.add("focused_pilled-option-btn");
        analyticsbtn[0].classList.remove("focused_pilled-option-btn");
        analytics[0].style.display="none";
    }
    function anabtn(){
        pomodorobtn[0].classList.remove("focused_pilled-option-btn");
        analyticsbtn[0].classList.add("focused_pilled-option-btn");
        analytics[0].style.display="flex";
    }
    
