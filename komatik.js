const eventButton = document.getElementById("info-button");
const moreInfo = document.getElementById("more-info");

let displayStatus = false;

function displayMoreInfo() {

    moreInfo.innerHTML = `
        <h2>Manajerial Divisions</h2>
        <ul>
            <li>Kesekretariatan</li>
            <li>Media Informasi</li>
            <li>Hubungan Masyarakat</li>
        </ul>
        <h2>Teknis Divisions</h2>
        <ul>
            <li>Competitive Programming</li>
            <li>ASGAMA</li>
            <li>Software Research Development</li>
            <li>UGM Esports</li>
            <li>IOT GAMA</li>
            <li>Gam-lab</li>
            <li>UX GAMA</li>
        </ul>
        <h2>Programs for GEMASTIK Preparation</h2>
        <ul>
            <li>TRAIL (Transfer Ilmu)</li>
            <li>Liga KOMATIK (Internal UGM selection for GEMASTIK)</li>
        </ul>
    `;
    if (displayStatus === false){
        moreInfo.style.display = 'block';
        displayStatus = true;
    }
    else{
        moreInfo.style.display = 'none';
        displayStatus = false;
    }
}

eventButton.addEventListener("click", displayMoreInfo);
