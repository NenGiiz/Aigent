window.onload = (event) =>{

    const paper_widget = document.createElement("div");
    paper_widget.setAttribute('class', 'paper-overlay"');
    paper_widget.setAttribute('style', 'position: fixed; inset: 0px; margin: 0px; z-index: 1000; overflow: hidden; display: flex; visibility: visible; opacity: 1; transition: all 0.2s ease 0s; justify-content: flex-end; background: rgba(0, 0, 0, 0.533);');
    
    paper_widget.innerHTML = `<div class="paper-drawer" style="position: relative; visibility: visible; opacity: 1; right: 0px; transition: all 0.2s ease 0s; width: 400px;">
                             <button id="close_widget" style="position:absolute;top:0.1em;right:0.2em;border-radius:8px;font-size:x-large;padding:0 0.5em;color:#fff;border:0;background:linear-gradient(120.03deg, #FD5F6A -12.99%, #A33DC2 50.69%, #54309B 99.17%);opacity:0;cursor:pointer;transition:all 0.25s">×</button>
                             <iframe src="https://paper.xyz/checkout/9089a7f0-4f3e-4002-a42a-e6f620de8a6f?display=DRAWER&colorPrimary=purple&colorBackground=black&colorText=white&borderRadius=1&fontFamily=Open+Sans&amp;" width="100%" height="100%" style="border:0"></iframe>
                             </div>`;

    var buyNFT = document.getElementsByClassName("buy-nft");
    if(buyNFT.length){
        for(var i=0; i< buyNFT.length; i++){
            buyNFT[i].addEventListener("click", function(){
                document.body.appendChild(paper_widget);   

                let closeBtn =paper_widget.getElementsByTagName('button');
                let theIframe =paper_widget.getElementsByTagName('iframe');

                theIframe[0].onload = function() {
                    closeBtn[0].style.opacity = '1';
                    closeBtn[0].addEventListener("click", function(){
                        paper_widget.remove();
                        closeBtn[0].style.opacity = '0';
                    });
                };
            }); 
        }
    }

    if(window.location.hash) {
        var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        if(hash=='buy-nft'){
            buyNFT[0].click();
        }
    } 

};