# Enquêtepagina
Dit is een Next.js project geïnitialiseerd met ``` create-next-app ```, ontwikkeld om inzichten te verzamelen via een enquête. Gebruikers kunnen via de enquêtepagina hun ervaringen en voorkeuren delen over het gebruik van apps en websites voor sociale contacten.

## Kenmerken
- Enquêteformulier: Gebruikers kunnen een reeks vragen beantwoorden over hun sociale contactvoorkeuren, ervaringen met apps/websites, en suggesties voor nieuwe ontmoetingsplatformen.
- Gegevensopslag: De antwoorden van de enquête worden veilig opgeslagen in een Notion-database, waarbij elk antwoord is gekoppeld aan de datum en tijd van inzending.

## Aan de slag
Om de ontwikkelserver te starten, voert u het volgende uit:

```bash
npm run dev
# of
yarn dev
# of
pnpm dev
# of
bun dev
```

Open http://localhost:3000 in uw browser om het resultaat te zien.

U kunt beginnen met het bewerken van de pagina door pages/index.tsx aan te passen. De pagina wordt automatisch bijgewerkt terwijl u het bestand bewerkt.

## API-routes
[API-routes](https://nextjs.org/docs/api-routes/introduction) kunnen worden geraadpleegd op http://localhost:3000/api/submit-form. Deze endpoint kan worden bewerkt in pages/api/submit-form.js.

De pages/api directory is gemapt naar /api/*. Bestanden in deze directory worden behandeld als [API-routes](https://nextjs.org/docs/api-routes/introduction) in plaats van React-pagina's.

