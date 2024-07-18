function college(name,batch,dept,year,){
    this.name=name
    this.batch=batch
    this.dept=dept
    this.year=year
  }
   college.prototype.rollno ="21cm222"
   const clg1=new college("Nandha",2021,"account",3)
   const clg2=new college("kumar",2022,"commer",2)
   console.log(clg1);
   console.log(clg2);
   console.log(clg2.rollno);