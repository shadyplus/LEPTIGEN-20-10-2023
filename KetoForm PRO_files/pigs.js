let isClicked=!1,pig=document.querySelectorAll(".pig"),popup=document.querySelector(".spin-result-wrapper"),arrDisc=["images/dis100.png","images/dis15.png","images/dis25.png"],discImgs=document.querySelectorAll(".pigs_disc");const showAll=(s,e,i=0)=>{i<2?setTimeout((()=>{e++,i++,e=e<s.length?e:0,s[e].classList.add("broken"),discImgs[e].setAttribute("src",arrDisc[i]),showAll(s,e,i)}),500):(popup.style.display="block",setTimeout((function(){$(".pigs_wrapper").slideUp(),$(".order_block").slideDown(),start_timer()}),1500))};pig.forEach(((s,e)=>{s.addEventListener("click",(()=>{isClicked||(isClicked=!0,s.classList.add("broken"),discImgs[e].setAttribute("src",arrDisc[0]),setTimeout((()=>{showAll(pig,e)}),1e3))}))}));