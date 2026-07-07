function openModal(imageSrc){
    document.getElementById("certificateModal").style.display="flex";
    document.getElementById("modalImage").src=imageSrc;
}

function closeModal(){
    document.getElementById("certificateModal").style.display="none";
}

window.onclick=function(e){
    const modal=document.getElementById("certificateModal");

    if(e.target===modal){
        modal.style.display="none";
    }
}