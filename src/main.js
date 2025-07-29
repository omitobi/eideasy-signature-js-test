import './style.css'
import Signature from '@eid-easy/signature-js'

const signature = new Signature({
    baseUrl: 'https://test.eideasy.com',
    onSuccess: () => {
        console.log('User has successfully signed the document');
    },
    onFail: (error) => {
        console.log('Signing failed');
    },
});



console.log(signature);

// On click of a button, then do signature.start.
document.getElementById("myButton").addEventListener("click", function() {
    signature.start({
        clientId: "5p6Gvcp8R9qd5mgD9QV3iI0HENqnrudg",
        docId: "JV0KINinTbqZoA7VOAed2xhZ1ZHFQ0gmwqiPeTeE",
        //actionType: "cert-store-qes-signature",
        actionType: "be-id-signature",
        country: "EE"
    })
});