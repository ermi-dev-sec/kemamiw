<template>
    <div class="posts view large-9 medium-8 columns content">
        <div class="row">
            <div class="columns large-6">
                <h3>Post Details</h3>
            </div>
            <div class="columns large-6 clearfix">
                <div class="button-group right">
                    <a @click="showDeleteDialog(user.id)" class="shadow radius large" title="Remove">
                        <i class="fi-trash large"></i>
                    </a>
                    <router-link
                        :to="{ path: `/posts/edit/${user.id}` }"
                        class="shadow radius large"><i class="fi-page-edit large"></i></router-link>
                </div>
            </div>
        </div>
        <table class="vertical-table">
            <tr>
                <th scope="row">ID</th>
                <td>{{ user.id }}</td>
            </tr>
            <tr>
                <th scope="row">username</th>
                <td>{{ user.username }}</td>
            </tr>
            <tr>
                <th scope="row">email</th>
                <td>{{ user.email }}</td>
            </tr>
        </table>

            </div>
</template>

<script>
    export default {
        data() {
            return {
                userID: null,
                user: [],
                currentRoute: null,
            };
        },
        mounted() {
            this.currentRoute = this.$router.currentRoute.name;
            this.userID = this.$route.params.id;
            this.getuser(this.$route.query);
        },
        watch: {
            '$route.query' (newQuery, oldQuery) {
                this.getuser(newQuery);
            }
        },
        methods: {
            getuser(query) {
                axios.get(`http://localhost/api/Users/view/${this.userID}`, { params: query })
                    .then(response => {
                        this.user = response.data.user;
                    })
                    .catch(error => {
                        console.log('Error: ' + error);
                    });
            },
            
        },
       
    }
</script>