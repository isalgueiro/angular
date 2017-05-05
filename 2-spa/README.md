```
 npm start

 // basic
 ng g m pages/home
 ng g c pages/home/home --flat --export
 
 // delegated
 ng g m pages/about --routing
 ng g c pages/about/about --flat

 // lazy
 ng g m pages/operations --routing
 ng g c pages/operations/operations --flat

 // nested
 ng g c pages/operations/new
 ng g c pages/operations/list

```