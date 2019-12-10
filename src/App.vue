<template>
    <div id="app">
        <Task/>
    </div>
</template>

<script>
    import "element-ui/lib/theme-chalk/index.css";
    import Task from './components/Task'

    export default {
        name: 'app',
        components: {
            Task
        },
    }
</script>
