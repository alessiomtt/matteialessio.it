"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center w-full py-12 md:py-24 lg:py-32 space-y-8">
            {/* Video Placeholder */}
            <div className="relative w-full aspect-[21/9] rounded-xl border border-border shadow-sm overflow-hidden bg-muted/20">
                <img
                    src="https://placehold.co/1280x720/png?text=Video+Placeholder"
                    alt="Video Placeholder"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Header Info */}
            <div className="flex flex-col items-center text-center w-full space-y-6">
                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground max-w-4xl">
                    Consulenza, formazione e soluzioni: Cybersecurity, OSINT ed Intelligenza Artificiale
                </h1>

                {/* Location & Status */}
                <div className="flex items-center space-x-4">
                    <span className="text-sm text-muted-foreground">Desenzano del Garda</span>
                    <Separator orientation="vertical" className="h-4" />
                    <Badge
                        variant="outline"
                        className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 px-2 py-0.5"
                    >
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Disponibile
                        </div>
                    </Badge>
                </div>

                {/* Description */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                    Sono <span className="font-semibold text-foreground">Alessio Mattei</span>, consulente, formatore e divulgatore. Nel caos digitale c’è sempre un ordine, basta saperlo vedere.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" className="min-w-[140px]">
                        Servizi
                    </Button>
                    <Button variant="outline" size="lg" className="min-w-[140px]">
                        Contatti
                    </Button>
                </div>
            </div>

            <Separator className="w-full" />
        </section>
    )
}
