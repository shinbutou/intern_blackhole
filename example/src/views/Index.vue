<template>
    <!-- 記住最外層只能用一個div包住 -->
    <div class="main-container">
        <!-- 切一個置中的div測試供參考，可觀察如何渲染資料 -->
        <!-- 在template調用函數以及data資料，不需要像在script區塊加入this.，因為template本身已屬於Vue物件 -->
        <div class="test-div">
            <h3>{{testTitle}}</h3>
            <div v-for="item in testLoopObject" :key='item.fakeData'>
                <div class="">{{item.name}}</div>
                <div class="">{{item.id}}</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
// SCSS設定
*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    transition: all .3s ease-in-out;
}
.main-container{
    width: 100%;
    height: 100%;
    .test-div{
        position: absolute;
        left: 50%;
        top: 50%;
        width: 400px;
        max-width: 95vw;
        max-height: 400px;
        border: 1px solid #000;
        font-size: 24px;
        margin: 40px 0;
        transform: translate(-50%,-50%);
        overflow-y: auto;
        padding: 40px 40px;
        h3{
            text-align: center;
        }
        div{
            margin: 40px 0;
        }
    }
}
</style>
<script>
export default {
    data(){
        return{
            testText: '你好, Hello World',
            testValue: 99943,
            testBoolean: false,
            // 
            testTitle: '此處抓取Title的資料',
            // 此處假資料可供模擬回傳的API資料
            testLoopObject:[
                {
                    name: 'FakeName 1',
                    id: '1111111111111',
                },
                {
                    name: 'FakeName 2',
                    id: '1111111111111',
                },
                {
                    name: 'FakeName 3',
                    id: '1111111111111',
                },
            ]
        }
        // 上方將資料傳回Vue物件，並在script其他部分以this.為前墜調用
    },
    mounted(){
        // Vue的生命週期：網頁元素渲染後
        console.log('當網頁畫面渲染完後，印出此行');
        this.init();
    },
    methods:{
        //此處註冊函數方法
        init(){
            console.log('我是init函數');
            console.log(`test datas: ${this.testText}, ${this.testValue}, ${this.testBoolean}`);
        },
        clickFunction(){
            alert('我被點擊了!!!');
        }
    }
}
</script>