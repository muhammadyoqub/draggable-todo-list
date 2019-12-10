<template>
    <el-col span=6>
        <el-card class="box-card general">
            <el-card__header slot="header" class=" card-header">
                <span class="main-title">{{title}}</span>
                <el-button v-if="insertable" style="float: right; padding: 3px 0" type="text"
                           v-on:click="$emit('showModal',true)">+ Add
                </el-button>
            </el-card__header>
            <div class="clearfix">
                <draggable :list="tasks" group="people">
                    <div v-for="(element) in tasks"
                         :key="element.id" class="card-item">

                        <p class="task-title">{{ element.name }}</p>
                        <p class="task-description">{{element.description }}</p>
                    </div>
                </draggable>
            </div>

        </el-card>
    </el-col>

</template>
<script>
    import draggable from 'vuedraggable';
    import {Card, Button, Col, Header} from 'element-ui';

    export default {
        name: "Board",
        order: 1,
        props: {
            title: String,
            tasks: Array,
            visible: Boolean,
            insertable: Boolean,
        },
        components: {
            draggable,
            'el-card': Card,
            'el-button': Button,
            'el-col': Col,
            'el-card__header': Header
        },
    };
</script>
<style>
    .el-card__header {
        border-bottom: none;
        line-height: 0;
        padding: 5px;
    }

    .general {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }

    .box-card {
        border-radius: 25px;
        padding-bottom: 20px;
        border: .5px solid;
        box-shadow: 2px 2px #d8d8d8;
        margin: 10px 5px;
        cursor: pointer;
        display: block;
    }

    .card-header {
        border-bottom: 1.5px solid #d8d8d8 !important;
        color: #0e4d3d;
        font-weight: 700;
        padding: 30px 10px;
        margin: 0 20px;
    }

    .main-title {
        color: #0e4d3d;
        font-weight: 700;
        line-height: 20px !important;
    }

    .el-card__body {
        padding: 10px;

    }

    .card-item {
        box-shadow: 1px 1px 10px #EBEEF5;;
        border: .5px solid;
        background-color: #FFF;
        color: #303133;
        transition: .3s;
        margin: 10px;
        border-radius: 5px;
    }

    .task-title {
        border-bottom: 0.5px solid #d8d8d8;
        color: #0c9;
        font-weight: 700;
        padding: 10px;
        margin: 10px 15px;
    }

    .task-description {
        color: grey;
        font-size: .75em;
        padding: 10px;
        margin: 0 15px;
    }

</style>



