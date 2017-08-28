/**
 * Created by USRDEL on 1/7/17.
 */
declare var module;
declare var sails;
declare var Articulo;
module.exports = {

  vistaOculta:(req,res)=>{
    return res.view('Oculto/sorpresa')
  },

 biblioteca:(req,res)=>{
   let parametros = req.allParams();

   sails.log.info("Parametros",parametros);

   if(!parametros.biblioteca){
     parametros.biblioteca ='';
   }
  Articulo
      .find()
      .where({
        title:{
          contains:parametros.biblioteca
        }
      })
      .exec((err,articulos)=>{
        if(err) return res.negotiate(err);
        sails.log.info("Articulos",articulos);

        return res.view('biblioteca',{
          articulos:articulos
        })
      })
  },
  crearArticulo:(req,res)=>{
    return res.view('busqueda')
  }


};
