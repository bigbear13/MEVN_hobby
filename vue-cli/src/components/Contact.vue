<template>
  <v-container fluid>
    <h1>Add Post</h1>
    <v-layout row>
      <v-flex xs4>
        <v-subheader>Title</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          name="input-1"
          label="Text"
          v-model="title"
        ></v-text-field>
      </v-flex>
    </v-layout>
      <v-layout row>
      <v-flex xs4>
        <v-subheader>Description</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          name="input-7-1"
          label="Text"
          v-model="description"
          multi-line
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-btn color="success" @click="addPost">Add</v-btn>
  </v-container>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    async addPost () {
      await PostsService.addPost({
        title: this.title,
        description: this.description
      })
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>
