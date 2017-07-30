rails g model Client first_name:string last_name:string middle_name:string client_number:string
rails g model BankAccount client:references balance:decimal account_number:string
rails g model AccountTransaction amount:decimal transaction_type:string bank_account:references
rails g migration add_transaction_number_to_account_transaction transaction_number:string
rails consoler
Client.create!(first_name: "Md.", last_name: "Kashem", middle_name: "Abul", client_number: "123456789")
client = Client.last
BankAccount.create!(client: client, account_number: "000001")
