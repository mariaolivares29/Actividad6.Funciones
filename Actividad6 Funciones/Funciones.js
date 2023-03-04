//Tarea 1. Calcular la tarifa diaria dada una tarifa por hora
function dayRate(Tarifa_Hora) {
   Tarifa_Diaria = Tarifa_Hora * 8
   return Tarifa_Diaria
}
alert("El resultado de la tarifia diaria es de: " +dayRate(89));

//Tarea 2. Calcular el número de días de trabajo dado un presupuesto fijo
function daysInBudget(PresupuestoFijo,Tarifa_Hora) {
    DiasDeTrabajo = PresupuestoFijo / dayRate(Tarifa_Hora) 
    return Math.floor(DiasDeTrabajo)
 }
 alert("Los dias de trabajo son: " +daysInBudget(20000,89));

 //Tarea 3. Calcule la tasa de descuento para grandes proyectos
function priceWithMonthlyDiscount(Tarifa_Hora, Dias, Descuento) {
  const Total_horas = Dias * 8;
  const DescTarifa = Tarifa_Hora * (1 - Descuento);
  const Precio_Total = Total_horas * DescTarifa;
  return Math.round(Precio_Total);
};

alert ("El precio total de lo proyectos con el descuento es de: "+priceWithMonthlyDiscount(89,230,0.42))