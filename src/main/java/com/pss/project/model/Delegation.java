package com.pss.project.model;

import com.pss.project.util.AutoCapacity;
import com.pss.project.util.Transport;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "delegations")
public class Delegation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(max = 30)
    private String description;

    @ManyToOne(fetch = FetchType.EAGER)
    private User user;

    @NotNull
    private LocalDateTime dateTimeStart;
    @NotNull
    private LocalDateTime dateTimeStop;

    @Min(0)
    private Integer travelDietAmount = 30;
    @Min(0)
    private Integer breakfastNumber = 0;
    @Min(0)
    private Integer dinnerNumber = 0;
    @Min(0)
    private Integer supperNumber = 0;
    private Transport transport;
    @Min(0)
    private Integer ticketPrice;
    private AutoCapacity autoCapacity;
    @Min(0)
    private Integer distance;
    @Min(0)
    private Integer accommodationPrice;
    @Min(0)
    private Integer otherTicketsPrice;
    private String otherOutlayDesc;
    @Min(0)
    private Integer otherOutlayPrice;

    private boolean isConfirmed = false;
    private Boolean requestStatus = null;

    public Delegation(String description, User user, LocalDateTime dateTimeStart,
                       LocalDateTime dateTimeStop, Transport transport, Integer ticketPrice,
                       AutoCapacity autoCapacity, Integer distance, Integer accommodationPrice,
                       Integer otherTicketsPrice, String otherOutlayDesc, Integer otherOutlayPrice) {
        this.description = description;
        this.user = user;
        this.dateTimeStart = dateTimeStart;
        this.dateTimeStop = dateTimeStop;
        this.transport = transport;
        this.ticketPrice = ticketPrice;
        this.autoCapacity = autoCapacity;
        this.distance = distance;
        this.accommodationPrice = accommodationPrice;
        this.otherTicketsPrice = otherTicketsPrice;
        this.otherOutlayDesc = otherOutlayDesc;
        this.otherOutlayPrice = otherOutlayPrice;
    }

    public Delegation(Long id, String description, User user, LocalDateTime dateTimeStart,
                      LocalDateTime dateTimeStop, Integer travelDietAmount, Integer breakfastNumber,
                      Integer dinnerNumber, Integer supperNumber, Transport transport, Integer ticketPrice,
                      AutoCapacity autoCapacity, Integer distance, Integer accommodationPrice,
                      Integer otherTicketsPrice, String otherOutlayDesc, Integer otherOutlayPrice) {
        this.id = id;
        this.description = description;
        this.user = user;
        this.dateTimeStart = dateTimeStart;
        this.dateTimeStop = dateTimeStop;
        this.travelDietAmount = travelDietAmount;
        this.breakfastNumber = breakfastNumber;
        this.dinnerNumber = dinnerNumber;
        this.supperNumber = supperNumber;
        this.transport = transport;
        this.ticketPrice = ticketPrice;
        this.autoCapacity = autoCapacity;
        this.distance = distance;
        this.accommodationPrice = accommodationPrice;
        this.otherTicketsPrice = otherTicketsPrice;
        this.otherOutlayDesc = otherOutlayDesc;
        this.otherOutlayPrice = otherOutlayPrice;
    }
}
