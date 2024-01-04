<template>
    <div>
        <object :data="urlPdf" type="application/pdf" width="100%" height="500px">
            <embed :src="urlPdf">
                This browser does not support PDFs. Please download the PDF to view it:
        </object> 
    </div>
</template>

<script>
export default {
    name : 'preview-pdf',
    props:{
        urlPdf : {
            type : String,
            default : ''
        },
    },
}
</script>