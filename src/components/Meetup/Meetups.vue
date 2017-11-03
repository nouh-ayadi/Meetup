<template>
<v-container>
    <v-layout row wrap>
        <v-flex xs12 sm10 md10 offset-sm1 offset-md2>
        <v-card class ="info">
            <v-container fluid>
                <v-layout row>
                    <v-flex xs5 sm4 md3>
                    <v-card-media
                      src="http://s1.1zoom.me/big3/550/371375-sepik.jpg"
                      height="130px"
                      contain> 
                    </v-card-media>
                    </v-flex>
                    <v-flex xs7 sm8 md9>
              <v-card-title primary-title>
                  <div>
                    <h4> My meetup </h4> 
                    <p> 2 November 2017.</p>
                  </div> 
              </v-card-title>
              <v-card-actions>
                  <v-btn flat to="/meetups/1">
                      <v-icon left > arrow_forward </v-icon>
                      View Meetups
                  </v-btn>
              </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>
