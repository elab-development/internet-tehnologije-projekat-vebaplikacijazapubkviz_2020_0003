# Korišćene tehnologije
* Laravel
* React
* phpMyAdmin

# Kloniranje

`git clone https://github.com/elab-development/internet-tehnologije-projekat-vebaplikacijazapubkviz_2020_0003/ `

# Pokretanje - backend

Najpre otvoriti XAMPP i pokrenuti Apache i MySQL module.

Ukoliko nema prethodno importovane baze, uneti komande:
  *  `php artisan migrate`
  *  `php artisan db:seed`

Potom u terminalu uneti komandu `php artisan serve`, bez obzira da li je importovana prethodno kreirana baza ili su generisani novi podaci.

# Pokretanje - frontend

Uneti redom komande:

* `npm install`
* `npm start`

# Funkcionalnosti

Za neprijavljene korisnike - registracija, prijavljivanje na sistem, ubacivanje slike, prikaz timova, prikaz i eksportovanje događaja u vidu .ics fajla, prikaz Scoreboarda.

Za prijavljene korisnike - uz onih koje su dostupne neprijavljenim korisnicima (osim registracije i prijavljivanja, za to je neophodno odjavljivanje) prikazivanje nasumičnih činjenica o hrani, nasumičnih činjenica o brojevima, nasumičnih pitanja (individualno i prema izabranoj kategoriji).

Za admine - uz funkcionalnosti prijavljenih korisnika, dodavanje, ažuriranje i brisanje podataka o članovima.
