<template>
    <div class="modal-wrap">
        <el-dialog :visible.sync="visible" title="Add task">
            <el-form :model="taskForm" status-icon ref="task" label-width="120px" class="demo-ruleForm">
                <el-form-item label="Name" prop="pass">
                    <el-input type="text" v-model="taskForm.name" autocomplete="off"
                              placeholder="Type Title"></el-input>
                </el-form-item>
                <el-form-item label="Description" prop="description">
                    <el-input type="text" v-model="taskForm.description" autocomplete="off"
                              placeholder="Type Description"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button v-on:click="$emit('showModal',false)">Cancel</el-button>
                    <el-button type="primary" v-on:click="$emit('save')">Create</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import {Dialog, Form, FormItem, Button, Input} from "element-ui";

    export default {
        name: 'modal',
        props: {
            visible: Boolean,
            taskForm: Object
        },
        components: {
            'el-dialog': Dialog,
            'el-form': Form,
            'el-form-item': FormItem,
            'el-button': Button,
            'el-input': Input,
        },
    };
</script>

<style>
    .el-dialog {
        width: 30%;
    }

    .el-dialog__header {
        padding: 20px 20px 10px;
        text-align: center;
    }

    .el-dialog__title {
        font-size: 24px;
        line-height: 24px;
        color: #303133;
    }


    element.style {
        width: 100px;
    }

    .el-form--label-left .el-form-item__label {
        text-align: left;
    }

    .el-form--label-left .el-form-item__label {
        text-align: left;
    }

    .el-form-item__label {
        font-weight: 700;
        text-align: left;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;

    }

    .el-mo {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        -webkit-transition: .1s;
        transition: .1s;
        font-weight: 500;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
    }


</style>
