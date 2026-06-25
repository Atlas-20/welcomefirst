display:grid;
//enable the grid or start grid
 
 grid-template-columns: ( can be in px , %age , )
 grid-template-rows: ( can be in px, %age, )
 // the "minmax" property can be use to assign and gain
 //responsive size 
          eg. 23px => minmax(23px , auto) 
           23px => means minimum size and 
           auto => means maximum size (it can grow )
           > To make it work we have give "height" of the 
           container to 100%


Now there comes repeat function 
now if we have to make many tows and columns then we
can use a function called "repeat()" 
grid-template-rows: repeat(4 ,100px);
grid-template-columns: repeat(5, 100px);
 

           Now the another unit "fraction"/fr is used to make reponsive grid .  We can assign as 
           1fr 1fr 1fr ;

Gap property:  
grid-row-gap:  ;
grid-column-gap:   ;
    // This will give gap bw to the rows and colums .


           justify-content: 
           align-content:  
           // In this there are a lot of properties  
           like space-evenly; space-around ; space-between ;
           read all of them , ok.


Grid-column-start: // 2;

Grid-column-end: //eg. 3;
// This decide where the grid box should start
// and where it should end 
+___It is mostly used for making bento grid

 grid-row-start: 3;
 grid-row-end: 5; 
               
               Or we can also write this start and end property as 
               grid-column:2/3; // column start at 2 and end at 3
               grid-row:   3/5;//row start at 3 and end at 5 

               And even all values can be included in 1 single property as  
                   grid-area: 2/3/3/5 // row-start/column-start/row-end/column-end.


    Grid-template-area: " header header"
                         "content sidebar"
                         "footer footer"
    
    #header{
        grid-area: header;

    }
    #content{
        grid-area: content;

    }
    # sidebar{
        grid-area: sidebar;

    }
    #footer{
        grid-area: footer;

    }
    