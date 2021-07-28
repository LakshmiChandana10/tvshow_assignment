<template>
  <div class="container">
    <div >
      <div class="row">
        <div class="heading">Popular Shows</div>
        <div class="row"> 
            <vue-horizontal>
                <div
            class="tvShow col-lg-3 col-md-4 col-sm-6"
            v-for="shows in popularShows"
            :key="shows.id"
          >
            <div class="tvShowImg">
              <img
                class="popularImage"
                :src="shows.image.original"
                width="200"
                height="300"
                
                @click="goToDetails(shows.id)"
              />
              <div>
                <span>
                  <b-icon icon="star-fill" class="popularStar"></b-icon>
                </span>
                <span class="rating">
                  {{ shows.rating.average }}
                </span>
              </div>
              <p class="showName">{{ shows.name }}</p>
            </div>
          </div> 
             </vue-horizontal> 
        </div>
      </div>
          <div
        class="tvShowLists row"
        v-for="itemList in categories"
        :key="itemList.id"
      >
        <p class="heading">{{ itemList.name }}</p>

        <div class="row">
            <vue-horizontal>
            <div
            class="col-lg-3 col-md-4 col-sm-6"
            v-for="showGenres in itemList.filterShows"
            :key="showGenres.id"
          >
            <img
            class="tvShowImg"
              id="images"
              :src="showGenres.image.medium"
              width="250"
              height="300"  
              @click="goToDetails(showGenres.id)"
            />
            <div>
              <span>
                <b-icon icon="star-fill" class="star-icon"></b-icon>
              </span>
            
            </div>
            <p class="rating">{{showGenres.rating.average}}</p>
            <p class="showName">{{ showGenres.name }}</p>
          </div>
            </vue-horizontal>
        </div>
      </div>
    </div>
    </div>  
</template>

<script>
import VueHorizontal from "vue-horizontal";
import { getAllShows } from "@/services/api";

export default {
  name: "Home",
  components: {VueHorizontal},
  data() {
    return {
      allShows: [],
      popularShows: [],
      categories: [],
      uniqueGenres: [],
    };
  },
  mounted() {
    this.getAllTvShows();
  },

  methods: {
    getAllTvShows() {
      getAllShows().then((res) => {
        this.allShows = res.data;
        this.allShows.forEach((showsList) => {
          if (showsList.rating.average >= 9) {
            this.popularShows.push(showsList);
          }
        });
       const set = new Set();
        this.allShows.forEach((i) => {
          i.genres.forEach((j) => {
            set.add(j);
          });
        });
        this.uniqueGenres = [...set];
        this.categories = this.uniqueGenres.map((genre) => {
          const filterShows = this.allShows
            .filter((show) => show.genres.includes(genre))
            .sort((a, b) => b.rating.average - a.rating.average);
          return { name: genre, filterShows };
        });
      });
    },

    goToDetails(id) {
      this.$router.push({
        name: "Details",
        params: {
          id,
        },
      });
    },
  },
};
</script>
<style scoped>
.popularStar {
  color: orangered;
}
.spinner-border {
  width: 65px;
  height: 65px;
  margin-top: 120px;
}
.star-icon {
  color: orangered;
}
.popularImage {
  border: 4px solid black;
  margin-top: 10px;
}
img {
  cursor: pointer;
  border-radius: 1%;
}
.heading {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 30px;
  color: black;
}
.showName {
  font-family:fantasy;
  font-size: 15px;
  color: black;
}
.rating{
    color: black
    }
.tvShowImg {
      padding-left: 50px;
    }
</style>
