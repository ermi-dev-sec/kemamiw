<template>
    <div class="posts index large-9 medium-8 columns content">
        <div class="row">
            <div class="columns large-6">
                <h3>Posts</h3>
<div v-for="use in use"> 
                 <p>{{ use.id }}</p>
                 <p>{{ use.username }}</p>
                 <p>{{ use.email }}</p>
</div>
                
                 
            </div>
        </div>
    </div>

</template>
    <script>
    export default {
        data() {
            return {
                use: [],                           
                currentRoute: null,
            };
        },
        mounted() {
            this.currentRoute = this.$router.currentRoute.name;
            this.myusers(this.$route.query);
        },
        watch: {
            '$route.query' (newQuery, oldQuery) {
                this.myusers(newQuery);
            }
        },

        methods: {
            myusers(query) {

                axios.get('/api/users/index', { params: query })
                    .then(response => {
                        this.use = response.data.use;
                    })
                    .catch(error => {
                        console.log('Error: ' + error);
                    });
            }
        },
    };
    </script>
