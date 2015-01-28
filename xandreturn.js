public class Permisssions {
  public boolean canDeposit,
                 canWithdraw,
                 canClose;
}


public class BankAccount {
  private long number;    // account number
  private long balance;   // current balance (in cents)
  
  public Permisions permissionsFor (Person who) {
    Permissions perm = new Permissions();
    perm.canDeposit = canDeposit(who);
    perm.canWithdraw = canWithdraw(who);
    perm.canClose = canClose(who);
    return perm;
  }
  
  // ... define canDeposit et al ...
}
