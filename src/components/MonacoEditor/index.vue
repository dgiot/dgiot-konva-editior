<!--
* @Author: h7ml
* @Date: 2021-10-18 10:40:34
* @LastEditors: h7ml
* @LastEditTime: 2021-10-18 10:40:34
* @Description:
* @FilePath: src\components\jsonMonaco\index.vue
* @DocumentLink: https://github.com/matt-oconnell/vue-monaco-editor#component-props
-->
<template>
    <div class="jsonMonaco">
        <MonacoEditor
            :key="randomkey"
            :changeThrottle="changeThrottle"
            :code="code"
            :editorOptions="options"
            :height="height"
            :highlighted="highlighted"
            :language="language"
            :width="width"
            @codeChange="onCodeChange"
            @mounted="onMounted"
        >
        </MonacoEditor>
    </div>
</template>

<script>
    import MonacoEditor from 'vue-monaco-editor'

    export default {
        name: 'monacoEditor',
        data() {
            return {
                code: '',
                editor: '',
            }
        },
        props: {
            randomkey: {
                type: String,
                default: '1231231',
                require: false,
            },
            // code: {
            //     // eslint-disable-next-line
            //     type: String | Object | Array,
            //     default: '',
            //     require: false,
            // },
            // eslint-disable-next-line
            language: {
                type: String,
                default: 'json',
                require: false,
            },
            height: {
                type: String,
                default: '100%',
                require: false,
            },
            // eslint-disable-next-line
            changeThrottle: {
                type: Number,
                default: 0,
                require: false,
            },
            // srcPath: {
            //     type: String,
            //     default: '""',
            //     require: false,
            // },
            highlighted: {
                type: Array,
                default() {
                    return []
                },
                require: false,
            },
            width: {
                type: String,
                default: '100%',
                require: false,
            },
            options: {
                type: Object,
                default() {
                    return {
                        // selectOnLineNumbers: true,
                        // language: 'json',
                        // value: this.code,
                        // theme: 'vs-dark',
                    }
                },
                require: false,
            },
        },
        components: {
            MonacoEditor,
        },
        methods: {
            onMounted(editor) {
                this.editor = editor
            },
            onCodeChange(editor) {
                console.log(this.editor.getValue())
            },
        },
    }
</script>
<style lang="scss" scoped>
  .jsonMonaco {
    height: calc(100vh - 150px);
  }
</style>
