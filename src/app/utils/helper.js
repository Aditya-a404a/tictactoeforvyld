  const checkWinner = (grid,row,col) =>
  {
    const n = grid.length;



    
  
    // Check rows
    for ( var i = 0; i <= n-streak ; i++)
      {
        var flg =1 
        for ( var j = i ;j < i+streak ; j++)
          {
            if (grid[row][i]!=grid[row][j])
              {
                flg = 0;
                break;
              }
            if (flg)
              {
                return grid[row][i];
              }
              
          }
      }
    
  
    // Check columns
    for ( var i = 0; i <= n-streak; i++)
      {
        var flg =1 
        for ( var j = i ;j < i+streak ; j++)
          {
            if (grid[i][col]!=grid[j][col])
              {
                flg = 0;
                break;
              }
            if (flg)
              {
                return grid[col][i];
              }
              
          }
      }
    

    
  
    // Check main diagonal
    var startx =row - Math.min(row,col);
    var starty = col - Math.min(row,col);
    for ( var i= startx , j = starty ; i <= n-streak && j<= n-streak ; i++,j++)
      {
        var flg = 1;
        for ( var k = 0 ; k < streak ; k++)
          {
            if (grid[startx][starty]!=grid[i+k][j+k])
              {
                flg = 0;
                break;
              }
          }
        if (flg)
          {
            return grid[startx][starty];
          }
      }
  
    // Check anti-diagonal
    var startx = row + Math.min(row,n-col-1);
    var starty = col - Math.min(row,n-col-1);
    for ( var i = startx , j = starty ; i >= streak-1 && j <= n-streak ; i--,j++)
      {  var flg = 1;
        for ( var k = 0 ; k < streak ; k++)
          {
            if (grid[startx][starty]!=grid[i-k][j+k])
              {
                flg = 0;
                break;
              }

          }
        if (flg)
          {
            return grid[startx][starty];
      }
  
    return null;
  }}