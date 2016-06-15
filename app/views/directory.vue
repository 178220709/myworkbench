<template>
    <content>
        <div>
            目录操作
        </div>
    </content>
</template>

<script type="text/babel">
    document.title = "商品管理";

    export default {
        data (){
            return {
                pkid: "",

            }
        },
        computed: {

        },

        route: {
            data (transition){
                transition.next();
            },
        },
        methods: {

        },
        components: {

        }
    }
</script>
