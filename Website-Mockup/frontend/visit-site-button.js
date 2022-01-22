function VisitSite(){
    window.open( 
        `${websiteAdress.value.replace(/\www./g, 'https://')}`, "_blank");

    var letters = /^[A-Za-z]+$/;

        if(inputtxt.value.match(letters))
        {
        websiteAdress = "https://" + websiteAdress.value
        }
        else
        {
        alert('Please input alphabet characters only');
        return false;
        }
}