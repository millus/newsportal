# Nyhetsmeldinger

Nettside som lar deg enkelt navigere mellom forskjellige portaler og gir deg en oversikt over siste nytt innenfor det tema du vil vite mer om. Dette er en web-app laget i React. 

## For å starte
1. Last ned prosjektet
2. Gå inn i mappen newsportal
3. I terminal skriv `npm start`
4. Åpne [http://localhost:3000](http://localhost:3000)
5. Les siste nytt :)

## Forutsetninger
- løsningen fungerer best med opptil 10-20 portaler
- skal det inn flere portaler så må navigasjon endres, legge til filter eller overkategorier f.eks
- første kategori er alltid "nå"

## Begrensninger/kjente bugs
- hvis en artikkel kun har video, og ikke pictures eller markup i content så vises det som [Object, object], bør lages en sjekk på dette
- les mer knappen vises noen ganger selv om alt innhold er der, pga jeg bruker length så tar den med alle tegnenge i en url som ligger i markup som ikke tar plass visuelt men som telles som tegn, så burde sett på en bedre løsning her
- hardkoder usestate til å starte med tittel ("Nå") mens setPortal bruker første element i listen, kan jo i noen tilfeller være noe annet enn "Nå"
- begrensning på at scroll med grab ikke fungerer på desktop, kan fikses med å legge til pil-knapper for å scrolle mellom portaler
- kunne delt opp i flere mindre komponenter, f.eks laget button komponent
- markering av valgt portal bør legges til for å være enda tydligere
- ved mer tid så skulle alle fargekoder, margins, font-størrelser vært lagt inn som variabler


## Skjermbilde av nettsiden

![desktop](https://user-images.githubusercontent.com/9111145/218347447-d78ee832-cc4a-4710-8945-2b7c5eb69f1c.jpg)
