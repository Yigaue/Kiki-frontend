<template>
  <section>
      
      <article class="container mb-4 p-3">
     <header><h1 class="p-2"> Box Full of Kisses</h1>
<img class = "img-fluid p-3" src="../assets/image/box.jpg">
     </header>
      
    Some time ago, a man punished his 3-year-old daughter for wasting a roll of gold wrapping paper. Money was tight and he became infuriated when the child tried to decorate a box to put under the Christmas tree.

Nevertheless, the little girl brought the gift to her father the next morning and said, “This is for you, Daddy.”

The man became embarrassed by his overreaction earlier, but his rage continue when he saw that the box was empty. He yelled at her; “Don’t you know, when you give someone a present, there is supposed to be something inside?”

The little girl looked up at him with tears in her eyes and cried;

“Oh, Daddy, it’s not empty at all. I blew kisses into the box. They’re all for you, Daddy.”

The father was crushed. He put his arms around his little girl, and he begged for her forgiveness.

Only a short time later, an accident took the life of the child.

Her father kept the gold box by his bed for many years and, whenever he was discouraged, he would take out an imaginary kiss and remember the love of the child who had put it there.
    
    </article>

    <article class="container mb-4 p-3">
    <header><h1> THE WARRIOR’S DESTINY</h1>
     <img class = "img-fluid p-3" src="../assets/image/warrior.png">
    </header>
    
    A great Japanese warrior named Nobunaga was going to war with a fierce enemy with only one-tenth the 
    number of men the opposition commanded. He knew that he could win the fight with a well planned strategy, 
    but his soldiers were in doubt.

On the way the leader stopped at a Shinto shrine and told his men: “After my visit to the shrine I will toss 
a coin. If the head comes, we will win; if tails, we will lose. Destiny holds us in her hand.”
Nobunaga entered the shrine and offered his prayers. Then he came forth and tossed a coin in front of his men. Heads appeared. The soldiers were filled with confident and were eager to win the battle.

“No one can change the hand of destiny,” one of his attendants told him after the battle.

“Indeed not,” said Nobunaga and showed the coin which was doubled with heads on the both side.
    </article>

     <article class="container mb-4 p-3">
        
     <header><h1>The Group of Frogs</h1>
       <img class = "img-fluid p-3" src="../assets/image/frogs.png">
     </header>
     
   As a group of frogs was traveling through the woods, two of them fell into a deep pit. When the other frogs crowded around the pit and saw how deep it was, they told the two frogs that there was no hope left for them.

However, the two frogs decided to ignore what the others were saying and they proceeded to try and jump out of the pit. 

Report this ad

Despite their efforts, the group of frogs at the top of the pit were still saying that they should just give up. That they would never make it out.

Eventually, one of the frogs took heed to what the others were saying and he gave up, falling down to his death. The other frog continued to jump as hard as he could. Again, the crowd of frogs yelled at him to stop the pain and just die.

He jumped even harder and finally made it out. When he got out, the other frogs said, “Did you not hear us?”

The frog explained to them that he was deaf. He thought they were encouraging him the entire time.
    </article>


   <article class="container mb-5 p-3">
     <header><h1>HOW DO YOU WANT TO BE REMEMBERED ?</h1>
     <img class = "img-fluid p-3" src="../assets/image/remember.jpg">
     </header>
   More than a decade ago, a man was reading his morning newspaper. To his surprise and horror, 
   he read his name in the obituary column. The news papers had mistakenly reported the death of 
   the wrong person for sure. He was shocked to read news headline  about his death. When he regained 
   his composure, He read it to find out what people had said about him.

The obituary included sentences like, “Dynamite King Dies.” and “He was the merchant of death.”. 
The man was the inventor of dynamite and when he read the words “merchant of death,” he asked himself a question,
“Is this how I am going to be remembered?” he asked himself. He decided that this was not the way he wanted to be 
remembered and he decided to change.

From that day on, he started working toward world peace. His name was Alfred Nobel and he is remembered today 
by the great Nobel Prize, the greatest of all the prizes.

The Nobel Prize has been honoring men and women from all corners of the globe for outstanding achievements in 
physics, chemistry, medicine, 
literature, and for work in peace since 1901. The foundations for the prize were laid in 1895 when Alfred Nobel 
wrote his last will, leaving much of his wealth to the establishment of the Nobel Prize.

<p><b>Moral </b>:<em> It is never late to start over.</em></p>
    </article>
    
    <article class="container mb-4 p-3">
     <header>
         <router-link to="/story-the-eighteenth-camel">
         <h1>THE EIGHTEENTH CAMEL </h1>
     <img class = "img-fluid p-3" src="../assets/image/camels.png">
     </router-link>
     </header>
      
  A wealthy merchant from the east passed away. In his will, the man stated equally 
  division of his wealth to three sons but his most treasured camels were divided in rather challenging way.

According to the will the eldest son was to be given half of the camels, the middle son was 
to be given one third of the camels, and the youngest son was to be given one ninth of the camels. 
The merchant had seventeen cattle. As it was not possible to divide 17 camels into half, one third 
or even into one ninth. The three son started fighting with each other for their fair share of the camels.
Since the sons were not able distribute the camel among them, they went to a wise man for advice. The wise
 man patiently listened about the sons’ dilemma. After carefully understanding the situation the wise man brought 
 one of his camels and added to the the seventeen camels of the merchant. That increased the total to eighteen (18) 
 camels.

Now, he started reading the deceased father’s will and divided the camels. Half of eighteen  is nine. So he gave the 
eldest son nine camels. One third of the eighteen is six, so he gave the middle son six camels. The youngest son got 
one ninth of the eighteen camels, so he gave him two camels.

After giving nine, six and two camels to the sons, he successfully distributed seventeen camels. The wise man took back
 his camel.

<p class="mb-2 p-2"><b>Moral</b> : <em>The attitude of negotiation and problem solving is to find the 18th camel i.e. the common ground. Once a person 
is able to find the common ground, the issue is resolved. It is difficult at times. However, to reach a solution, the 
first step is to believe that there is a solution. If we think that there is no solution, we won’t be able to reach 
anywhere!</em></p>
    </article>
    
    
    </section>
</template>

<script>
export default {
    data(){
        return{

            story:
            {
                 title: "",
            content: "",
            author: "",
            },
           submitted: false,
           hidden: true,
        }
    },
   methods: {

   } ,
   created () {
       this.$http.get('https://kiki-bc8c1.firebaseio.com/posts.json').then(function(data){
           
           console.log(data);
       });
   }
}
</script>
<style scoped>

article{
    text-align: justify;
    font-family:sans-serif;
}
h1{
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    text-transform:uppercase;
}
img{
    width: 250px;
    height: 220px;
    float: left;
  clear: both;
}
</style>