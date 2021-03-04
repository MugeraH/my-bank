//business logic
function Account(fullName,initialDeposit){
  this.fullName = fullName;
  this.initialDeposit= initialDeposit;
this.deposits = [];
this.withdrawals = [];
}

Account.prototype.deposit= function(userDeposit){
this.deposits.push(userDeposit)
return  this.initialDeposit += userDeposit;
}
Account.prototype.withdrawing= function(userWithdraw){

  this.withdrawals.push(userWithdraw)
  return  this.initialDeposit -= userWithdraw;
  }

Account.prototype.totalDeposits = function(){
return  this.deposits.reduce((a,b)=>a+b,0)

}

Account.prototype.totalWithdraws = function(){
return  this.withdrawals.reduce((a,b)=>a+b)
}





//user logic
$(document).ready(function() {



  $("#createAccount").click(function(){
  
    let fullName = $('input#fullName').val();
    let initialDeposit= parseInt($('input#initialDeposit').val());
        let newAccount = new Account(fullName,initialDeposit)
  

    $("#details").fadeIn(1000)
    $("#user").text(newAccount.fullName)
    $("#displayBalance").text(newAccount.initialDeposit)

    $('input#fullName').val(" ");
    $('input#initialDeposit').val(" ")

    $("#deposit").click(()=>{
      let userDeposit= parseInt($('input#userDeposit').val());
       $("#depositAmount").text(userDeposit)
           $("#displayBalance").text(newAccount.deposit(userDeposit))
       $('#totalDeposit').text(newAccount.totalDeposits())
       $('input#userDeposit').val(" ")
    })

    $("#withdraw").click(()=>{
      let userWithdraw= parseInt($('input#userWithdraw').val());

        $("#withdrawAmount").text(userWithdraw)
     $("#displayBalance").text(newAccount.withdrawing(userWithdraw))
      $('#totalWithdraw').text(newAccount.totalWithdraws())
      $('input#userWithdraw').val(" ")
    })
  })

  $('#deleteAccount').click(function(){
    $("#details").fadeOut(1000,()=>{
      $("#user").text(' ')
      $("#displayBalance").text(' ')
    })
  
  })

})