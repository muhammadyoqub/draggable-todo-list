<template>
    <el-row :gutter=20>
        <div class="row main-wrapper">
            <Board title="To Do" :tasks="todo" @showModal="showModal"/>
            <Board title="In Progress" :tasks="inProgress" @showModal="showModal"/>
            <Board title="Done" :tasks="done" @showModal="showModal"/>
            <Board title="List Task" :tasks="listTask" @showModal="showModal" v-bind:insertable="true"/>

            <Modal :visible="visible" @showModal="showModal" @save=add :taskForm="newTask"/>
        </div>
    </el-row>
</template>
<script>
    import Modal from "./Modal";
    import Board from "./Board";
    import {Row} from "element-ui"

    export default {
        name: "Task",
        order: 1,
        components: {
            Modal,
            Board,
            'el-row': Row,
        },
        data() {
            return {
                id: 7,
                newTask: {},
                todo: [
                    {name: "Task D", description: 'Update Style', id: 1}
                ],
                inProgress: [
                    {name: "Task E", description: 'Remove button Y', id: 2}
                ],
                done: [
                    {name: "Task F", description: 'Fix bug #001', id: 3},
                ],
                listTask: [
                    {name: "Task C", description: 'There is a bug when user click button X', id: 4},
                    {name: "Task B", description: 'Update using typescript', id: 5},
                    {name: "Task A", description: 'Refactor using Kotlin', id: 6},
                ],
                visible: false
            };
        },
        methods: {
            add: function () {
                this.listTask.push(this.newTask);
                this.visible = false;
                this.id++
            },
            showModal(val) {
                this.newTask = {id: this.id};
                this.visible = val;
            },
        }
    };
</script>


